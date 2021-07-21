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

class ShippingAddress extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>No Address found click '+' to add your shipping address</Text>
            </View>
        )
    }

}
const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {
    updateUser: user => dispatch(actions.updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingAddress);