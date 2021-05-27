import React, { Component } from 'react';
import Style from './Style.js';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import { Pager, PagerProvider } from '@crowdlinker/react-native-pager';
import Footer from 'modules/generic/Footer.js'
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const transactionData = []

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: 'Just Sold',
          number: 0
        },
        {
          title: 'Ready to ship',
          number: 0
        },
        {
          title: 'Orders',
          number: 0
        },
        {
          title: 'Listings',
          number: 0
        },
        {
          title: 'Consigned',
          number: 0
        },
        {
          title: 'Pre Owned',
          number: 0
        }
      ]
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }


  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    return true
  };

  render() {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={{
            height: height,
            backgroundColor: '#F5F5F5'
          }}>
            <View style={{ flexDirection: 'row', height: height * 0.2, backgroundColor: 'white', paddingTop: 20, paddingBottom: 20 }}>
              <View style={[
                Style.topView,
                { borderRightColor: Color.gray }
              ]}>
                <Text style={Style.topText}>Unavailable</Text>
                <Text style={{ color: 'gray' }}>Selling Status</Text>
              </View>
              <View style={Style.topView}>
                <Text style={Style.topText}>Unavailable</Text>
                <Text style={{ color: 'gray' }}>Seller's Status</Text>
              </View>
            </View>
            <View style={Style.container}>
              {this.state.list.map(item => (
                <View style={Style.bottomContainer}>
                <View style={Style.numberContainer}>
                  <Text>{item.number}</Text>
                </View>
                <View style={Style.textContainer}>
                  <Text>{item.title}</Text>
                </View>
              </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <Footer navigation={this.props.navigation} index={3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
});
const mapStateToProps = (state) => ({ state: state });

const mapDispatchToProps = (dispatch) => {
  const { actions } = require('@redux');
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
