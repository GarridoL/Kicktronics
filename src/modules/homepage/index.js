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
  Dimensions,
  StatusBar 
} from 'react-native';
import Style from './Style.js'
import { connect } from 'react-redux'
import { Routes, Color, Helper, BasicStyles } from 'common';
import SubHeader from 'modules/generic/SubHeader.js'
import Footer from 'modules/generic/Footer.js'
import Card from 'modules/generic/Card.js'
import { Spinner } from 'components';
import firebaseApi from 'services/api/firebaseApi'
import firestore from '@react-native-firebase/firestore';
import RNFetchBlob from "rn-fetch-blob";
import { SafeAreaView } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

let response = {
  data: [
    { 'id': 1, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'Adidas', 'status': 'OUT OF STOCK', 'model': 'DFS434', 'category': 'Men' },
    { 'id': 2, 'url': require('assets/logo2.png'), 'price': '$200', 'title': 'Nike', 'status': 'OUT OF STOCK', 'model': 'DFS434', 'category': 'Men' },
    { 'id': 3, 'url': require('assets/logo1.png'), 'price': '$200', 'title': 'Rebook', 'status': 'OUT OF STOCK', 'model': 'DFS434', 'category': 'Women' },
    { 'id': 4, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'World Balance', 'status': 'OUT OF STOCK', 'model': 'DFS434', 'category': 'Men' },
    { 'id': 5, 'url': require('assets/logo2.png'), 'price': '$200', 'title': 'New Balance', 'status': 'OUT OF STOCK', 'model': 'DFS434', 'category': 'Women' },
    { 'id': 6, 'url': require('assets/logo1.png'), 'price': '$200', 'title': 'Snicker', 'status': 'OUT OF STOCK', 'model': 'DFS434', 'category': 'Men' },
    { 'id': 7, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'Robetson', 'status': 'OUT OF STOCK', 'model': 'DFS434', 'category': 'Women' }
  ]
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
    };
  }
  componentDidMount() {
    // console.log('Got Users collection re');
    this.setState({ isLoading: true })
    firestore()
      .collection('sneakers')
      .limit(10)
      .get()
      .then(querySnapshot => {
        console.log('Total sneakers: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          this.setState({ isLoading: false })
          let tempData = this.state.data.concat(documentSnapshot.data())
          tempData.map(el => {
            const fs = RNFetchBlob.fs
            RNFetchBlob.config({
              fileCache: true
            })
              .fetch("GET", el.picture)
              // the image is now dowloaded to device's storage
              .then(resp => {
                // the image path you can use it directly with Image component
                imagePath = resp.path();
                return resp.readFile("base64");   
              })
              .then(base64Data => {
                // here's base64 encoded image
                console.log(base64Data);
                // this.setState({ images: base64Data })
                el.picture = base64Data
                // remove the file from storage
                return fs.unlink(imagePath);
              });
          })
          this.setState({ data: tempData })
          // console.log('Sneakers:================ ', documentSnapshot.id, documentSnapshot.data());
        });
      });
  }
  onResult(QuerySnapshot) {
    console.log('Got Users collection re');
    // QuerySnapshot.forEach(element => {
    // });
  }
  onError(error) {
    console.error(error);
  }

  render() {
    const { data } = this.state
    return (
      <SafeAreaView>
        <SubHeader navigation={this.props.navigation} index={1} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          onContentSizeChange={this.onContentSizeChange}
          >
            <View style={{height:  height, flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingTop: 50, paddingBottom: 100,  backgroundColor: '#F5F5F5', }}>
              {
                data.map(el => {
                  return (
                    <Card item={el} page={'homepage'} route={'detailsStack'} navigation={this.props.navigation} />
                  )
                })
              }
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
)(HomePage);