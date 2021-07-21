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
  Dimensions,
} from 'react-native';
import Style from './Style.js';
import {connect} from 'react-redux';
import {Routes, Color, Helper, BasicStyles} from 'common';
import SubHeader from 'modules/generic/SubHeader.js';
import Footer from 'modules/generic/Footer.js';
import Card from 'modules/generic/Card.js';
import {Spinner} from 'components';
import ModalOptions from 'modules/modal/options.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCartPlus,
  faCheck,
  faHeadset,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class NoAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View
          style={{
            height: height,
            // flex: 1,
            backgroundColor: '#F5F5F5',
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Color.white,
              borderColor: 'gray',
              borderWidth: 1,
              height: 30,
              width: width - 80,
              marginBottom: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: 5,
            }}
            onPress={() => this.props.navigation.navigate('loginStack')}>
            <Text>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Color.white,
              borderColor: 'gray',
              borderWidth: 1,
              height: 30,
              width: width - 80,
              marginBottom: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: 5,
            }}
            onPress={() => this.props.navigation.navigate('registerStack')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default NoAccount;
