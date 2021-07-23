import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faBars, faPlus} from '@fortawesome/free-solid-svg-icons';
import ShippingAddress from 'modules/products/payment/ShippingAddress.js';
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
        <TouchableOpacity onPress={this.back.bind(this)}>
          {/*Donute Button Image */}
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={BasicStyles.headerBackIconSize}
            style={{color: theme ? theme.secondary : Color.secondard }}
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

const AddressStack = createStackNavigator({
  termsAndConditionsScreen: {
    screen: ShippingAddress,
    navigationOptions: ({navigation}) => ({
      title: 'Choose address',
      headerLeft: <HeaderOptionsConnect navigationProps={navigation} />,
      headerRight: <TouchableOpacity onPress={() => navigation.navigate('addAddressStack')}><FontAwesomeIcon style={{marginRight: 10}} icon={faPlus}></FontAwesomeIcon></TouchableOpacity>,
      headerTitleStyle:{marginLeft: 60},
      headerStyle:{elevation: 0},
      // headerTransparent:true,
      ...BasicStyles.drawerHeader1
    }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressStack);
