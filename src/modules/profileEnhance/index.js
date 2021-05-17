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
import ModalOptions from 'modules/modal/options.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons';

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class ProfileEnhance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('[PROPS:] ', this.props.navigation.state.params);
  }

  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: height,
              // flex: 1,
              backgroundColor: '#F5F5F5',
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={{width: '50%', alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>0</Text>
                <Text style={{fontSize: 20, color: 'gray'}}>OFFER</Text>
              </View>
              <View style={{width: '50%', alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>0</Text>
                <Text style={{fontSize: 20, color: 'gray'}}>SELL</Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={[Style.btnWithShadow, {backgroundColor: Color.primary}]}
                onPress={() => this.props.navigation.navigate('editProfileStack')}>
                <Text style={{fontWeight: 'bold'}}>EDIT PROFILE</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
                  <View style={{width: '50%',}}>
                      <TouchableOpacity style={[Style.btnWithShadow, {width: 150, height: 150}]}>
                          <FontAwesomeIcon icon={faCartPlus} size={40} color={'gray'}></FontAwesomeIcon>
                          <Text style={{width: '50%', marginTop: 20, color: 'gray'}}>PURCHASE HISTORY</Text>
                      </TouchableOpacity>
                  </View>
                  <View >
                      <TouchableOpacity style={[Style.btnWithShadow, {width: 150,  height: 150}]}>
                          <FontAwesomeIcon icon={faHeadset} size={40} color={'gray'}></FontAwesomeIcon>
                          <Text style={{width: '50%', marginTop: 20, color: 'gray'}}>HELP & HISTORY</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
        </ScrollView>
        <ModalOptions navigation={this.props.navigation}></ModalOptions>
        <Footer navigation={this.props.navigation} index={4} />
      </View>
    );
  }
}
export default ProfileEnhance;
