import React, {Component} from 'react';
import { Color } from 'common';
import {Text, View, StyleSheet, ScrollView, Switch, Image, TextInput, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Styles.js'
const width = Math.round(Dimensions.get('window').width);
class AddPayment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{width: width/2-10}}>
              <TouchableOpacity>
                <View style={{alignItems: 'center', borderWidth:1, borderColor: Color.gray, borderRadius: 10, margin: 10}}>
                  <Image source={require('assets/credit-card.png')} />
                  <Text>Credit card</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width: width/2-10}}>
              <TouchableOpacity>
                <View style={{alignItems: 'center', borderWidth:1, borderColor: Color.gray, borderRadius: 10, margin: 10}}>
                  <Image source={require('assets/debit-card.png')} />
                  <Text>Debit Card</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.AccountSettingsInputContainer, {padding: 10}]}>
            <View style={styles.InputTitleContainer}>
              <Text style={styles.InputTitleTextStyle}>Card Number</Text>
            </View>
            <View style={styles.TextInputContainer}>
              <TextInput />
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={[styles.AccountSettingsInputContainer, {width: '50%', paddingRight: 5}]}>
              <View style={styles.InputTitleContainer}>
                <Text style={styles.InputTitleTextStyle}>Expiration Date</Text>
              </View>
              <View style={styles.TextInputContainer}>
                <TextInput />
              </View>
            </View>
            <View style={[styles.AccountSettingsInputContainer,{width: '50%', paddingLeft: 5}]}>
              <View style={styles.InputTitleContainer}>
                <Text style={styles.InputTitleTextStyle}>CVV</Text>
              </View>
              <View style={styles.TextInputContainer}>
                <TextInput />
              </View>
            </View>
          </View>
          <View style={[styles.AccountSettingsInputContainer,{padding: 10}]}>
            <View style={styles.InputTitleContainer}>
              <Text style={styles.InputTitleTextStyle}>Card Holder Name</Text>
            </View>
            <View style={styles.TextInputContainer}>
              <TextInput />
            </View>
          </View>
          <View style={[styles.AccountSettingsInputContainer,{padding: 10}]}>
            <View style={styles.InputTitleContainer}>
              <Text style={styles.InputTitleTextStyle}>Address</Text>
            </View>
            <View style={styles.TextInputContainer}>
              <TextInput />
            </View>
          </View>
          <TouchableOpacity style={[ styles.AccountSettingsButtonContainer, {backgroundColor: Color.secondary, padding: 10}, ]}>
            <Text style={[styles.AccountSettingsButtonTextStyle, {color: 'white'}]}>Add Payment</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default AddPayment;
