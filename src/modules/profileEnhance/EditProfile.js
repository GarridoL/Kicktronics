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
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import Style from './Style.js';
import {connect} from 'react-redux';
import {Routes, Color, Helper, BasicStyles} from 'common';
import SubHeader from 'modules/generic/SubHeader.js';
import Footer from 'modules/generic/Footer.js';
import Card from 'modules/generic/Card.js';
import ModalOptions from 'modules/modal/options.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCartPlus, faHeadset} from '@fortawesome/free-solid-svg-icons';
import PasswordWithIcon from 'components/InputField/Password.js';

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      password: null,
      modalType: null,
    };
  }

  redirect(route, formType) {
    const {showModal} = this.state;
    if (formType === 'Email' || formType === 'Password') {
      this.setModalVisible(!showModal);
    }
    this.props.navigation.navigate(route, {
      formType: formType,
    });
    // this.props.navigation.navigate(route, {
    //   formType: formType,
    // });
  }

  setModalVisible = async (visible, formType) => {
      console.log(formType);
      if(formType === 'Email'){
        await this.setState({modalType: 'Email'});
      }else{
        await this.setState({modalType: 'Password'});
      }
    await this.setState({showModal: visible});
  };

  renderModal(formType) {
    const {showModal} = this.state;
    return (
      <View style={[Style.centeredView]}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            this.setModalVisible(!showModal);
          }}>
          <View style={Style.centeredView}>
            <View style={Style.modalView}>
              <View style={{width: width}}>
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
                  <Text style={{fontWeight: 'bold'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    Style.btnWithShadow,
                    {
                      backgroundColor: Color.secondary,
                      width: 100,
                    },
                  ]}
                  onPress={() => this.redirect('profileFormStack', formType)}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
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
    const {modalType} = this.state;
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
            <Text>Patrick</Text>
          </View>
        </TouchableOpacity>
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
            <Text>Patrick</Text>
          </View>
        </TouchableOpacity>
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
            <Text>johnpatrick.cabia-an@student.passerellesnumeriques.org</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.redirect('profileFormStack', 'Phone')}>
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
            <Text>Patrick</Text>
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
      </View>
    );
  }
}

export default EditProfile;
