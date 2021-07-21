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
import {Picker} from '@react-native-community/picker';
import firestore from '@react-native-firebase/firestore';
import countries from './countries';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class AddAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      country: null,
      postalCode: null,
      countryCode: null,
      city: null,
      street: null,
      phone: null,
    };
  }

  addCountries() {
      const {firstName, lastName, country, postalCode, countryCode, city, phone, street} = this.state;
      let parameter = {
          shipping_first_name: firstName,
          shipping_last_name: lastName,
          shipping_postal_code: postalCode,
          shipping_country_code: countryCode,
          shipping_city: city,
          shipping_phone: phone,
          shipping_address_line_1: street,
      }
      console.log(parameter);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
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
          <TouchableOpacity onPress={() => this.addCountries()}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              style={{
                ...BasicStyles.basicFormControl,
                marginBottom: 20,
                borderColor: 'black',
                width: '45%',
              }}
              onChangeText={firstName => this.setState({firstName})}
              placeholder={'First Name'}
            />
            <TextInput
              style={{
                ...BasicStyles.basicFormControl,
                marginBottom: 20,
                borderColor: 'black',
                width: '50%',
              }}
              onChangeText={lastName => this.setState({lastName})}
              placeholder={'Last Name'}
            />
          </View>
          <TextInput
              style={{
                ...BasicStyles.basicFormControl,
                marginBottom: 20,
                borderColor: 'black',
                width: '100%',
              }}
              keyboardType="numeric"
              onChangeText={phone => this.setState({phone})}
              placeholder={'Phone Number'}
            />
          <TextInput
            style={{
              ...BasicStyles.basicFormControl,
              marginBottom: 20,
              borderColor: 'black',
              width: '100%',
            }}
            onChangeText={street => this.setState({street})}
            placeholder={'Street'}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              style={{
                ...BasicStyles.basicFormControl,
                marginBottom: 20,
                borderColor: 'black',
                width: '45%',
              }}
              onChangeText={city => this.setState({city})}
              placeholder={'City'}
            />
            <TextInput
              style={{
                ...BasicStyles.basicFormControl,
                marginBottom: 20,
                borderColor: 'black',
                width: '50%',
              }}
              keyboardType="numeric"
              onChangeText={postalCode => this.setState({postalCode})}
              placeholder={'Postal Code'}
            />
          </View>
          <View style={{width: '100%', alignItems: 'center', borderBottomWidth: 1}}>
            <Picker
              selectedValue={this.state.selectedType}
              style={[
                Style.cardStyleWithShadow,
                {
                  height: 30,
                  width: 150,
                  marginTop: 10,
                  justifyContent: 'center',
                  backgroundColor: 'none',
                },
              ]}
              mode={'dropdown'}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({countryCode: itemValue});
              }}>
              {countries.map((el, index) => {
                return <Picker.Item key={index} label={el.label} value={el.value} />;
              })}
            </Picker>
          </View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);
