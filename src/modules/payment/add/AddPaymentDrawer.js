import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faQrcode,
  faBars,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import AddPayment from './index.js';
import { NavigationActions } from 'react-navigation';
import { BasicStyles } from 'common';
import { connect } from 'react-redux';

class HeaderOptions extends Component {
  constructor(props) {
    super(props);
  }
  back = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'paymentMethodsStack',
    });
    this.props.navigationProps.dispatch(navigateAction);
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <TouchableOpacity onPress={this.back.bind(this)}>
          {/*Donute Button Image */}
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={BasicStyles.iconSize}
            style={{ color: '#572066' }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ state: state });

const mapDispatchToProps = (dispatch) => {
  const { actions } = require('@redux');
  return {};
};

const AddPaymentStack = createStackNavigator({
  addPaymentScreen: {
    screen: AddPayment,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Payment Method',
      headerLeft: <HeaderOptions navigationProps={navigation} />,
      headerTintColor: BasicStyles.headerTintColor,
      headerTitleStyle: BasicStyles.headerTitleStyle,
    }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPaymentStack);
