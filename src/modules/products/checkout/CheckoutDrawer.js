import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faBars} from '@fortawesome/free-solid-svg-icons';
import Checkout from 'modules/products/checkout/Checkout.js';
import {NavigationActions} from 'react-navigation';
import {BasicStyles, Color} from 'common';
import {connect} from 'react-redux';
const width = Math.round(Dimensions.get('window').width);
class HeaderOptions extends Component {
  constructor(props) {
    super(props);
  }
  back = () => {
    this.props.navigationProps.pop()
  };
  render() {
    const { theme } = this.props.state;
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.back.bind(this)} style={{marginLeft: 10}}>
          {/*Donute Button Image */}
          <Text>Cancel</Text>
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

const CheckoutStack = createStackNavigator({
  termsAndConditionsScreen: {
    screen: Checkout,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <HeaderOptionsConnect navigationProps={navigation} />,
      headerTitleStyle:{marginLeft: -20},
      headerStyle:{elevation: 0, borderWidth: 0.5},
      // headerTransparent:true,
      ...BasicStyles.drawerHeader1
    }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckoutStack);
