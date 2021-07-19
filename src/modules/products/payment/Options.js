import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Style from './Style.js';
import {connect} from 'react-redux';
import {Routes, Color, Helper, BasicStyles} from 'common';
import SubHeader from 'modules/generic/SubHeader.js';
import Footer from 'modules/generic/Footer.js';
import Card from 'modules/generic/Card.js';
import {DateTime, Spinner} from 'components';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      isLoading: false,
      user: null,
    };
  }

  componentDidMount() {}

  proceedToNextPage(flag) {
    const {page, isLoading} = this.state;
    const {user} = this.props.state;
    const {updateUser} = this.props;
    if (flag === false) {
      this.setState({page: page + 1});
    } else {
      if (this.validateBasicInfo() === true) {
        this.setState({page: page + 1});
      }
    }
  }

  validateBasicInfo() {
    const {birthDate} = this.state;
    if (birthDate !== null) {
      return true;
    } else {
      Alert.alert(
        'Error Message',
        'Please fill up all fields',
        [{text: 'OK'}],
        {cancelable: false},
      );

      return false;
    }
  }

  render() {
    const {page, isLoading, user} = this.state;
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>
              Before offering a sneaker, you need to put your Paypal information
              and shipping address
            </Text>
            <Text
              style={{
                marginTop: 10,
                width: 340,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              once you win your offer, we'll charge your PayPal for the amoutn
              you've set, and ship the sneakers out to your address.
            </Text>
          </View>
          <View style={{position: 'absolute', top: 640}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('addressStack')}
              style={[Style.btnWithShadow, {marginBottom: 10}]}>
              <Text>Add an Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Style.btnWithShadow]}>
              <Text>Add payment method</Text>
            </TouchableOpacity>
          </View>
        </View>
        {isLoading ? <Spinner mode="overlay" /> : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {
    updateUser: user => dispatch(actions.updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
