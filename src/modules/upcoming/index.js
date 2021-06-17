import React, {Component} from 'react';
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
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);
const date = new Date();
let response = {
    data: [
        {'id': 1, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'Adidas', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`},
        {'id': 2, 'url': require('assets/logo2.png'), 'price': '$200', 'title': 'Nike', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`},
        {'id': 3, 'url': require('assets/logo1.png'), 'price': '$200', 'title': 'Rebook', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`},
        {'id': 4, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'World Balance', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`},
        {'id': 5, 'url': require('assets/logo2.png'), 'price': '$200', 'title': 'New Balance', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`},
        {'id': 6, 'url': require('assets/logo1.png'), 'price': '$200', 'title': 'Snicker', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`},
        {'id': 7, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'Robetson', 'date': `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`}
    ]
}

  class Upcoming extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render(){
        return(
            <View>
                <SubHeader navigation={this.props.navigation} index={3}/>
                <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{
                    height: height,
                    // flex: 1,
                    backgroundColor: '#F5F5F5',
                    paddingLeft: 10,
                    paddingRight: 10
                }}>
                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',  justifyContent:'space-between', paddingTop: 50, paddingBottom: 90}}>
                          {
                            response.data.map(el => {
                                return (
                                    <Card item={el} page={'upcoming'}/>
                                )
                            })
                          }
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={this.props.navigation} index={1}/>
        </View>
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