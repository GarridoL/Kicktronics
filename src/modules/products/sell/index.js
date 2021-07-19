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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      isLoading: false,
      user: null,
      birthDate: null,
      firstName: null,
      lastName: null,
      email: null,
      showDatePicker: false,
    };
  }

  componentDidMount() {
    const {user} = this.props.state;
    if (user) {
      this.setState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        birthDate: user.birthDate,
      });
    }
  }

  showDatePicker = () => {
    this.setState({showDatePicker: true});
  };

  hideDatePicker = () => {
    this.setState({showDatePicker: false});
  };

  handleConfirm = date => {
    let tempDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    this.setState({birthDate: tempDate})
    hideDatePicker();
  };

  renderbasicInfo() {
    const {firstName, lastName, birthDate, email} = this.state;
    return (
      <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
        <Text style={{marginTop: 20, color: Color.gray, marginBottom: 5}}>
          Basic Information
        </Text>
        <TextInput
          style={{
            ...BasicStyles.basicFormControl,
            marginBottom: 20,
          }}
          onChangeText={firstName => this.setState({firstName})}
          value={firstName}
          placeholder={'First Name'}
        />
        <TextInput
          style={{
            ...BasicStyles.basicFormControl,
            marginBottom: 20,
          }}
          onChangeText={lastName => this.setState({lastName})}
          value={lastName}
          placeholder={'Last Name'}
        />
        <TextInput
          style={{
            ...BasicStyles.basicFormControl,
            marginBottom: 20,
          }}
          onChangeText={email => this.setState({email})}
          value={email}
          placeholder={'Email Address'}
          keyboardType={'email-address'}
        />
        {/* <DateTime
                    type={'date'}
                    placeholder={birthDate !== null ? birthDate : 'Date of birth'}
                    onFinish={(date) => {
                        this.setState({
                            birthDate: date.date
                        })
                    }}
                    style={{
                        ...BasicStyles.basicFormControl,
                        marginTop: -20,
                        backgroundColor: 'red'
                    }}
                /> */}
        <TouchableOpacity
          style={{
            ...BasicStyles.basicFormControl,
            paddingBottom: 10,
            height: 30
          }}
          onPress={() => this.showDatePicker()}>
          <Text style={{color: 'gray'}}>{birthDate !== null ? birthDate : 'Date of birth'}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={this.state.showDatePicker}
          mode="date"
          onConfirm={() => this.handleConfirm()}
          onCancel={() => this.hideDatePicker()}
        />
      </View>
    );
  }

  renderShippingAddress() {
    return (
      <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
        <Text style={{marginTop: 20, color: Color.gray, marginBottom: 5}}>
          Basic Information
        </Text>
        <TextInput
          style={{
            ...BasicStyles.basicFormControl,
            marginBottom: 20,
            borderColor: 'black',
          }}
          onChangeText={street => this.setState({street})}
          placeholder={'Street Name'}
        />
        <TextInput
          style={{
            ...BasicStyles.basicFormControl,
            marginBottom: 20,
            borderColor: 'black',
          }}
          onChangeText={AptName => this.setState({AptName})}
          placeholder={'Apt name/Apt number (optional)'}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={{
              ...BasicStyles.basicFormControl,
              marginBottom: 20,
              borderColor: 'black',
              width: '50%',
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
            onChangeText={zipCode => this.setState({zipCode})}
            placeholder={'Zip Code'}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={{
              ...BasicStyles.basicFormControl,
              marginBottom: 20,
              borderColor: 'black',
              width: '50%',
            }}
            onChangeText={state => this.setState({state})}
            placeholder={'State'}
          />
          <TextInput
            style={{
              ...BasicStyles.basicFormControl,
              marginBottom: 20,
              borderColor: 'black',
              width: '50%',
            }}
            onChangeText={country => this.setState({country})}
            placeholder={'Country'}
          />
        </View>
        <TextInput
          style={{
            ...BasicStyles.basicFormControl,
            marginBottom: 20,
            borderColor: 'black',
          }}
          keyboardType="numeric"
          onChangeText={phone => this.setState({phone})}
          placeholder={'Phone number'}
        />
      </View>
    );
  }

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
      // if(this.validateBasicInfo() === true){
      //     this.setState({isLoading: true})
      //     firestore().collection('users').where('customerId', '==', user.customerId).get().then(res => {
      //         res.forEach(el => {
      //             firestore().collection('users').doc(el.id).update({birthDate: this.state.birthDate}).then(response => {
      //                 this.setState({isLoading: false})
      //                 user['birthDate'] =  this.state.birthDate
      //                 console.log('>>>>>>>>>', user);
      //                 updateUser(user);
      //             })
      //         })
      //     })
      // }
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
          {page == 0 ? (
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => this.setState({page: page - 1})}>
              <Text>Prev</Text>
            </TouchableOpacity>
          )}
          {page == 0 ? (
            <TouchableOpacity
              onPress={() => this.proceedToNextPage(page == 0 ? false : true)}>
              <Text>Next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => this.proceedToNextPage(true)}>
              <Text>Next</Text>
            </TouchableOpacity>
          )}
        </View>
        {page === 0 && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('assets/logo.png')}
              style={{
                width: '15%',
                height: '20%',
                marginLeft: 'auto',
                marginRight: 'auto',
                resizeMode: 'stretch',
              }}></Image>
            <View
              style={{
                marginTop: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>To start selling, you'll nee to submit</Text>
              <Text>some additional information</Text>
              <Text style={{marginTop: 20}}>Tap Next to Continue</Text>
            </View>
          </View>
        )}
        {page === 1 && this.renderbasicInfo()}
        {page === 2 && this.renderShippingAddress()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
