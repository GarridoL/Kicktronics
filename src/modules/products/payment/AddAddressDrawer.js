import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faBars, faPlus} from '@fortawesome/free-solid-svg-icons';
import AddAddress from 'modules/products/payment/AddAddress.js';
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
      <View style={{flexDirection: 'row', borderBottomWidth: 1, width: 1000, paddingBottom: 10}}>
        <TouchableOpacity onPress={this.back.bind(this)}>
          {/*Donute Button Image */}
          <Text style={{marginLeft: 10}}>Cancel</Text>
          {/* <FontAwesomeIcon
            icon={faChevronLeft}
            size={BasicStyles.headerBackIconSize}
            style={{color: theme ? theme.secondary : Color.secondard }}
          /> */}
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

const AddAddressStack = createStackNavigator({
  termsAndConditionsScreen: {
    screen: AddAddress,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <HeaderOptionsConnect navigationProps={navigation} />,
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
)(AddAddressStack);
