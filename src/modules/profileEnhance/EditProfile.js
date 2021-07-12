import React, { Component } from 'react';
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
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Style from './Style.js';
import { Spinner } from 'components';
import { connect } from 'react-redux';
import { Routes, Color, Helper, BasicStyles } from 'common';
import PasswordWithIcon from 'components/InputField/Password.js';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      password: null,
      modalType: null,
      user: null,
      isLoading: false,
      error: null
    };
  }


  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.retrieveData();
    })
    this.retrieveData()
  }

  async retrieveData() {
    const { isLoading } = this.state
    const token = await AsyncStorage.getItem(Helper.APP_NAME + 'uid');
    if (token != null) {
      this.setState({ isLoading: true });
      firestore().collection('users')
        .where('customerId', '==', token)
        .get()
        .then(response => {
          response.forEach(async el => {
            this.setState({ isLoading: false });
            this.setState({ user: el.data() })
          })
        })
    }
  }

  redirect(route, formType) {
    const { showModal } = this.state;
    if (formType === 'Email' || formType === 'Password') {
      this.setModalVisible(!showModal);
    }
    this.props.navigation.navigate(route, {
      formType: formType,
      user: this.state.user
    });
  }

  setModalVisible = async (visible, formType) => {
    console.log(formType);
    if (formType === 'Email') {
      await this.setState({ modalType: 'Email' });
    } else {
      await this.setState({ modalType: 'Password' });
    }
    await this.setState({ showModal: visible });
  };

  validatePassword(formType){
    // const { modalType, user, showModal } = this.state;
    this.setState({isLoading: true})
    this.reAuthenticate(this.state.password).then(() => {
      this.setState({isLoading: false, error: null})
      this.redirect('profileFormStack', formType)
    }).catch(error => {
      console.log('-->>', error.message);
      this.setState({error: error.message})
    })
  }

  reAuthenticate(currentPass){
    let user = auth().currentUser;
    let cred = auth.EmailAuthProvider.credential(
      user.email, currentPass
    )
    return user.reauthenticateWithCredential(cred);
  }


  renderModal(formType) {
    const { showModal } = this.state;
    return (
      <View style={[Style.centeredView]}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            this.setModalVisible(!showModal);
          }}>
          <View style={[Style.centeredView, {backgroundColor: 'rgba(0,0,0, 0.4)'}]}>
            <View style={Style.modalView}>
              <Text style={{color: Color.danger}}>{this.state.error}</Text>
              <View style={{ width: width }}>
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
                  flexDirection: 'row',
                  marginTop: '10%',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  style={[
                    Style.btnWithShadow,
                    {
                      backgroundColor: Color.primary,
                      width: 100,
                    },
                  ]}
                  onPress={() => this.setModalVisible(!showModal)}>
                  <Text style={{ fontWeight: 'bold' }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    Style.btnWithShadow,
                    {
                      backgroundColor: Color.secondary,
                      width: 100,
                    },
                  ]}
                  onPress={() => this.validatePassword(formType)}>
                  <Text style={{ fontWeight: 'bold', color: 'white' }}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  render() {
    const { modalType, user, showModal } = this.state;
    console.log('*****', user);
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.redirect('profileFormStack', 'Username')}>
          <View
            style={[
              Style.cardWithShadow,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width,
              },
            ]}>
            <Text>USERNAME</Text>
            <Text>{user !== null ? user.username: '----'}</Text>
          </View>
        </TouchableOpacity>
        {
          user && (
            <TouchableOpacity
              onPress={() => this.redirect('profileFormStack', 'Full Name')}>
              <View
                style={[
                  Style.cardWithShadow,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: width,
                  },
                ]}>
                <Text>FULL NAME</Text>
                <Text>{user !== null ? user.firstName + ' '+ user.lastName: '----'}</Text>
              </View>
            </TouchableOpacity>
          )
        }

        <TouchableOpacity onPress={() => this.setModalVisible(true, 'Email')}>
          <View
            style={[
              Style.cardWithShadow,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width,
              },
            ]}>
            <Text>EMAIL</Text>
            <Text>{user !== null ? user.email: '----'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.redirect('profileFormStack', 'Phone')}>
          <View
            style={[
              Style.cardWithShadow,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width,
              },
            ]}>
            <Text>PHONE</Text>
            <Text>{user !== null ? user.phone || '-----' : '----'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setModalVisible(true, 'Password')}>
          <View
            style={[
              Style.cardWithShadow,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width,
              },
            ]}>
            <Text>PASSWORD</Text>
            <Text>Change Password</Text>
          </View>
        </TouchableOpacity>


        {this.renderModal(modalType)}
        {
          this.state.isLoading === true && (
            <Spinner mode="overlay" />
          )
        }
      </View>
    );
  }
}

export default EditProfile;
