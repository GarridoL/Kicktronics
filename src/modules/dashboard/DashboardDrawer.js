import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQrcode, faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Dashboard from 'modules/dashboard/index.js';
import { NavigationActions } from 'react-navigation';
import { BasicStyles, Color } from 'common';
import {connect} from 'react-redux';
import Style from './Style.js'
class HeaderOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  back = () => {
    this.props.navigationProps.pop()
  };
  render() {
    const { theme } = this.props.state;
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.back.bind(this)}>
          {/*Donute Button Image */}
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={BasicStyles.headerBackIconSize}
            style={{color: theme ? theme.primary : Color.primary }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({state: state});

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('@redux');
  return {};
};
let HeaderOptionsConnect  = connect(mapStateToProps, mapDispatchToProps)(HeaderOptions);

const DashboardStack = createStackNavigator({
  termsAndConditionsScreen: {
    screen: Dashboard,
    navigationOptions: ({navigation}) => ({
      title: 'DASHBOARD',
      headerLeft: <HeaderOptionsConnect navigationProps={navigation} />,
      headerTitleStyle:{marginLeft: -30},
      headerStyle:{elevation: 0},
      headerStyle: Style.headerStyle,
      // headerTransparent:true,
    }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardStack);