
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Style';
import {NavigationActions, StackActions} from 'react-navigation';
import {ScrollView, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Helper, BasicStyles, Color, Routes } from 'common';
import Config from 'src/config.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Api from 'services/api/index.js';

class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
  navigateToScreen = (route) => {
    this.props.navigation.toggleDrawer();
    const navigateAction = NavigationActions.navigate({
      routeName: 'drawerStack',
      action: StackActions.reset({
        index: 0,
        key: null,
        actions: [
            NavigationActions.navigate({routeName: route, params: {
              initialRouteName: route,
              index: 0
            }}),
        ]
      })
    });
    this.props.navigation.dispatch(navigateAction);
  }

  redirect = (route) => {
    this.props.navigation.navigate(route);
  };

  logoutAction(){
    
    //clear storage
    const { logout, setActiveRoute } = this.props;
    logout();
    // setActiveRoute(null)
    setTimeout(() => {
      // this.navigateToLogin('Login')
      this.props.navigation.navigate('loginStack');
    }, 100)
  }

  render () {
    const { user, theme } = this.props.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {user != null ? (
                <View style={[styles.sectionHeadingStyle, {
                  backgroundColor: theme ? theme.primary : Color.primary
                }]}>
                  {
                    user.profile != null && user.profile.url != null && (
                      <Image
                        source={{uri: Config.BACKEND_URL  + user.profile.url}}
                        style={[BasicStyles.profileImageSize, {
                          height: 100,
                          width: 100,
                          borderRadius: 50
                        }]}/>
                    )
                  }

                  {
                    (user.profile == null || (user.profile != null && user.profile.url == null)) && (
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        size={100}
                        style={{
                          color: Color.white
                        }}
                      />
                    )
                  }

                  {
                    (user.status == 'GRANTED' || user.status == 'VERIFIED') && (
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        size={20}
                        style={{
                          color: theme ? theme.secondary : Color.secondary,
                          marginTop: -15,
                          marginLeft: 60
                        }}
                      />
                    )
                  }

                  <Text  style={{
                    color: Color.white,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 10
                  }}>
                    Hi {user.username}!
                  </Text>
                  <TouchableOpacity
                    style={{
                      marginTop: 10,
                      alignItems:'center',
                      justifyContent:'center',
                      width:110,
                      height:30,
                      borderRadius: 30,
                      backgroundColor: theme ? theme.secondary : Color.secondary
                    }}
                    onPress={() => {this.redirect("editProfileStack")}}
                  >
                  {
                    user.status == 'VERIFIED' || user.status == 'GRANTED' ?
                      <Text style={{
                      fontWeight: 'bold',
                      color: Color.white}}>
                        Verified
                      </Text> :
                      <Text style={{
                      fontWeight: 'bold',
                      color: Color.white}}>
                        Verify Now
                      </Text>
                  }
                  </TouchableOpacity>

                </View>
              ) : 
              <Text style={[styles.sectionHeadingStyle, {
                paddingTop: 150,
                backgroundColor: theme ? theme.primary : Color.primary
              }]}>
              Welcome to {Helper.company}!
            </Text>}
            {Helper.DrawerMenu.length > 0 &&
              Helper.DrawerMenu.map((item, index) => {
                return(
                <View style={[styles.navSectionStyle, {
                  flexDirection: 'row',
                  alignItems: 'center'
                }]} key={index}>
                  <FontAwesomeIcon icon={item.icon} style={[item.iconStyle, {
                    color: theme ? theme.primary : Color.primary,
                    marginLeft: 10
                  }]}/>
                  <Text style={styles.navItemStyle} onPress={() => this.navigateToScreen(item.route)}>
                    {item.title}
                  </Text>
                </View>)
              })
            }
            <View style={styles.navSectionStyle}>
              <Text style={[styles.navItemStyle, {
                color: Color.danger,
                fontWeight: 'bold'
              }]} onPress={() => this.logoutAction()}>
                Logout
              </Text>
            </View>
          </View>
        </ScrollView>
        
        <View style={styles.footerContainer}>
          <Text
            style={{color: theme ? theme.primary : Color.primary, textDecorationLine: 'underline'}}
           onPress={() => Linking.openURL('http://increment.ltd/')}>A product of {Helper.company}</Text>
        </View>
      </View>
    );
  }
}

Slider.propTypes = {
  navigation: PropTypes.object
};

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    logout: () => dispatch(actions.logout()),
    setActiveRoute: (route) => dispatch(actions.setActiveRoute(route))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider);
