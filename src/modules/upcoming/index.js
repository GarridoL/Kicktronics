import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Dimensions
} from 'react-native';
import Style from './Style.js'
import { connect } from 'react-redux'
import { Routes, Color, Helper, BasicStyles } from 'common';
import SubHeader from 'modules/generic/SubHeader.js'
import Footer from 'modules/generic/Footer.js'
import Card from 'modules/generic/Card.js'
import { Spinner } from 'components';
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);
const date = new Date();
let response = {
  data: [
    { 'id': 1, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'Adidas', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}` },
    { 'id': 2, 'url': require('assets/logo2.png'), 'price': '$200', 'title': 'Nike', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}` },
    { 'id': 3, 'url': require('assets/logo1.png'), 'price': '$200', 'title': 'Rebook', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}` },
    { 'id': 4, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'World Balance', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}` },
    { 'id': 5, 'url': require('assets/logo2.png'), 'price': '$200', 'title': 'New Balance', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}` },
    { 'id': 6, 'url': require('assets/logo1.png'), 'price': '$200', 'title': 'Snicker', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}` },
    { 'id': 7, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'Robetson', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}` }
  ]
}

class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {
    // console.log('Got Users collection re');
    this.setState({ isLoading: true })
    firestore()
      .collection('sneakers')
      .where('release', '!=', '')
      .limit(10)
      .get()
      .then(querySnapshot => {
        console.log('Total sneakers: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          this.setState({ isLoading: false })
          let tempData = this.state.data.concat(documentSnapshot.data())
          this.setState({ data: tempData })
          // console.log('Sneakers:================ ', documentSnapshot.id, documentSnapshot.data());
        });
      });
  }

  render() {
    const { data } = this.state
    return (
      <SafeAreaView style={{backgroundColor: '#F5F5F5'}}>
        <SubHeader navigation={this.props.navigation} index={3} />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: data.length > 0 ? (data.length + 70) + '%' : height }}>
            <View style={{ height: height, flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingTop: 50, paddingBottom: 90 }}>
              {
                data.map(el => {
                  return (
                    <Card item={el} route={'detailsStack'} page={'upcoming'} navigation={this.props.navigation} />
                  )
                })
              }
            </View>
          </View>
        </ScrollView>
        {
          this.state.isLoading === true && (
            <Spinner mode="overlay" />
          )
        }
        <Footer navigation={this.props.navigation} index={1} />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upcoming);