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

let response = {
    data: [
        {'id': 1, 'url': require('assets/logo0.png'), 'price': '$200', 'title': 'Adidas'},
        {'id': 2, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'Nike'},
        {'id': 3, 'url': require('assets/logo1.png'), 'price': '$200', 'title': 'Rebook'},
        {'id': 4, 'url': require('assets/logo0.png'), 'price': '$200', 'title': 'World Balance'},
        {'id': 5, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'New Balance'},
        {'id': 6, 'url': require('assets/logo1.png'), 'price': '$200', 'title': 'Snicker'},
        {'id': 7, 'url': require('assets/logo0.png'), 'price': '$200', 'title': 'Robetson'}
    ]
}

  class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render(){
        return(
            <View>
                <SubHeader navigation={this.props.navigation} index={1}/>
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
                                    <Card item={el}/>
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
  )(HomePage);