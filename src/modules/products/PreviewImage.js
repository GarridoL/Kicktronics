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
import AsyncStorage from '@react-native-community/async-storage';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class PreviewImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      isLoading: false,
      backgroundColor: '',
      selectedIssues: [],
    };
  }

  componentDidMount() {}

  render() {
    const {page, isLoading, listIssues} = this.state;
    const {picture} = this.props.navigation.state.params;
    console.log(picture);
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: picture}}
            style={{width: '100%', height: '60%'}}></Image>
        </View>
        <View style={[{position: 'absolute', bottom: 10, width: '100%', justifyContent: 'center', alignItems: 'center'}]}>
          <Text>View from firebasestorage.googleapis.com</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewImage);
