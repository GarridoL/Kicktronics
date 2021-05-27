import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faBars} from '@fortawesome/free-solid-svg-icons';
import HomePage from 'modules/homepage/index.js';
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

const HomePageStack = createStackNavigator({
  termsAndConditionsScreen: {
    screen: HomePage,
    navigationOptions: ({navigation}) => ({
      title: 'BUY NOW',
      headerLeft: <HeaderOptionsConnect navigationProps={navigation} />,
      headerTitleStyle:{marginLeft: -30, zIndex: 1000},
      headerStyle:{elevation: 0},
      // headerTransparent:true,
      ...BasicStyles.drawerHeader1
    }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePageStack);
