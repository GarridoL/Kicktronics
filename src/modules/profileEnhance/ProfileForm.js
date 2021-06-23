import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Dimensions,
} from 'react-native';
import Style from './Style.js';
import { connect } from 'react-redux';
import { Routes, Color, Helper, BasicStyles } from 'common';
import SubHeader from 'modules/generic/SubHeader.js';
import Footer from 'modules/generic/Footer.js';
import Card from 'modules/generic/Card.js';
import ModalOptions from 'modules/modal/options.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons';
import PasswordWithIcon from 'components/InputField/Password.js';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      phone: null,
      confirmPassword: null
    };
  }

  componentDidMount() {
    const { user } = this.props.navigation.state.params
    this.setState({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone
    })
    console.log(this.props.navigation.state.params);
  }

  saveChanges(formType) {
    const { username, firstName, lastName, email, phone } = this.state
    const { user } = this.props.state
    const { updateUser } = this.props;
    if (formType === null) {
      this.setState({ isLoading: true })
      firestore().collection('users').where('customerId', '==', user.customerId).get().then(res => {
        res.forEach(el => {
          firestore().collection('users').doc(el.id).update({
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone

          }).then(response => {
            this.setState({ isLoading: false })
            user['username'] = username,
              user['firstName'] = firstName,
              user['lastName'] = lastName,
              user['email'] = email,
              user['phone'] = phone
            updateUser(user);
            this.props.navigation.pop()
          })
        })
      })
    } else if (formType === 'email') {
      let aut = auth().currentUser;
      aut.updateEmail(this.state.email).then(() => {
        firestore().collection('users').where('customerId', '==', user.customerId).get().then(res => {
          res.forEach(el => {
            firestore().collection('users').doc(el.id).update({
              email: email,

            }).then(response => {
              this.setState({ isLoading: false })
              user['email'] = email;
              updateUser(user);
              this.props.navigation.pop()
            })
          })
        })
      })
    } else if (formType === 'password') {
      if (this.state.password === this.state.confirmPassword) {
        let aut = auth().currentUser;
        aut.updatePassword(this.state.password).then(() => {
          this.props.navigation.pop();
        })
      } else {
        console.log('->>Password Not the same');
      }
    }
  }
  validateInput() {
    const { password, confirmPassword } = this.state
    if (password !== null && confirmPassword !== null) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { formType } = this.props.navigation.state.params;
    return (
      <View>
        <View style={[Style.TextContainer]}>
          {formType === 'Username' && (
            <TextInput
              style={{
                ...BasicStyles.standardFormControl,
                marginBottom: 20,
              }}
              autoFocus={true}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
              placeholder={'Username'}
            />
          )}
          {formType === 'Full Name' && (
            <View>
              <TextInput
                style={{
                  ...BasicStyles.standardFormControl,
                  marginBottom: 20,
                }}
                autoFocus={true}
                onChangeText={firstName => this.setState({ firstName })}
                value={this.state.firstName}
                placeholder={'First Name'}
              />
              <TextInput
                style={{
                  ...BasicStyles.standardFormControl,
                  marginBottom: 20,
                }}
                autoFocus={true}
                onChangeText={lastName => this.setState({ lastName })}
                value={this.state.lastName}
                placeholder={'Last Name'}
              />
            </View>
          )}
          {formType === 'Email' && (
            <TextInput
              style={{
                ...BasicStyles.standardFormControl,
                marginBottom: 20,
              }}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              placeholder={'Email Address'}
              keyboardType={'email-address'}
            />
          )}
          {formType === 'Phone' && (
            <TextInput
              style={{
                ...BasicStyles.standardFormControl,
                marginBottom: 20,
              }}
              onChangeText={phone => this.setState({ phone })}
              value={this.state.phone}
              placeholder={'Phone Number'}
            />
          )}
          {formType === 'Password' && (
            <View>
              <View>
                <PasswordWithIcon
                  onTyping={input =>
                    this.setState({
                      password: input,
                    })
                  }
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                }}>
                <PasswordWithIcon
                  onTyping={input =>
                    this.setState({
                      confirmPassword: input,
                    })
                  }
                  placeholder={'Confirm Password'}
                />
              </View>
            </View>
          )}
          <TouchableOpacity
            style={[
              Style.btnWithShadow,
              {
                backgroundColor: Color.secondary,
                width: width,
                marginLeft: '-5%',
              },
            ]}
            onPress={() => this.saveChanges(formType === 'Password' ? 'password' : formType === 'Email' ? 'email' : null)}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    updateUser: (user) => dispatch(actions.updateUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
