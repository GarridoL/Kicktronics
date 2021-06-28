import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Dimensions, Modal, Alert } from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './optionsStyle.js';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

class Options extends Component {
  constructor(props) {
    super(props);
    this.state
  }

  redirect = (route) => {
    if(route === 'termsAndConditionsStack') {
      this.props.navigation.navigate(route);
    } else if (route === 'returnPolicyStack'){
      this.props.navigation.navigate('termsStack', { data: {
        title: '',
        arrowRight: true,
        color: null,
        route: 'termsAndConditionsStack',
        description: "All sales are final and no returns are accepted. Please make sure you have chosen the correct size."
      }})
    }
    this.props.setModalOptions(false);
  }
  logout(){
    const { logout } = this.props;
    auth().signOut()
    logout();
    this.props.navigation.navigate('loginStack')
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          visible={this.props.state.show}
        >
          <View style={{
            borderBottomColor: Color.gray,
            borderBottomWidth: .3
          }}>
            <TouchableOpacity style={{
              padding: 15
            }}
              onPress={() => {
                this.props.setModalOptions(false);
              }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            paddingLeft: 15
          }}>
            {Helper.options.map((item, index) => (
              <View>
                {
                  item.title === 'Logout' ? (
                    <TouchableOpacity style={{
                      paddingTop: 20,
                      paddingBottom: 20,
                      borderBottomColor: Color.gray,
                      borderBottomWidth: .3,
                      flexDirection: 'row'
                    }}
                    onPress={() => {
                      this.logout()
                    }}>
                      <Text style={{
                        color: item.color ? item.color : 'black'
                      }}>{item.title}</Text>
                      {item.arrowRight && <FontAwesomeIcon 
                        icon={faChevronRight} 
                        style={{
                          position: 'absolute',
                          right: 10,
                          top: 15,
                          color: Color.gray
                        }}
                        size={15}></FontAwesomeIcon>}
                    </TouchableOpacity>
                  ) : 
                  (
                    <TouchableOpacity style={{
                      paddingTop: 20,
                      paddingBottom: 20,
                      borderBottomColor: Color.gray,
                      borderBottomWidth: .3,
                      flexDirection: 'row'
                    }}
                    onPress={() => {
                      this.redirect(item.route)
                    }}>
                      <Text style={{
                        color: item.color ? item.color : 'black'
                      }}>{item.title}</Text>
                      {item.arrowRight && <FontAwesomeIcon 
                        icon={faChevronRight} 
                        style={{
                          position: 'absolute',
                          right: 10,
                          top: 15,
                          color: Color.gray
                        }}
                        size={15}></FontAwesomeIcon>}
                    </TouchableOpacity>
                  )
                }
                </View>
            ))}
          </View>
        </Modal>
      </View>
    );
  }

}
const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    setModalOptions: (show) => { dispatch(actions.setModalOptions(show)) },
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
