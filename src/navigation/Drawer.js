import React, { Component } from 'react';
import { View, TouchableOpacity, Dimensions, Share } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faShare } from '@fortawesome/free-solid-svg-icons';
import Slider from 'modules/slider';
import { Color, BasicStyles } from 'common';
import DashboardStack from 'modules/dashboard/DashboardDrawer';
import Profile from 'modules/profile';
import { Product, Marketplace, Checkout } from 'components';
import OptionRight from './OptionRight';
import OptionRightRequest from './OptionRightRequest';
import TermsAndConditions from 'modules/termsAndConditions';
import DemandsStack from 'modules/demands/DemandsDrawer.js';
import HomePageStack from 'modules/homepage/HomeDrawer.js';
import AccessoriesStack from 'modules/accessories/AccessoriesDrawer.js'
import UpcomingStack from 'modules/upcoming/UpcomingDrawer.js'
import Search from 'modules/search'
import ProfileStack from 'modules/profileEnhance/ProfileDrawer.js'
import Style from './Style.js';
import { connect } from 'react-redux'

const width = Math.round(Dimensions.get('window').width);
class MenuDrawerStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: true,
    };
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}></View>
    );
  }
}

const mapStateToProps = (state) => ({ state: state });

const mapDispatchToProps = (dispatch) => {
  const { actions } = require('@redux');
  return {
    viewShare: (isShow) => {
      dispatch(actions.viewShare(isShow))
    },
  };
};

const _StackNavigator = createStackNavigator({
  Terms: {
    screen: TermsAndConditions,
    navigationOptions: ({ navigation }) => ({
      title: 'Terms & condition',
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerTransparent: true
    }),
  },
  Dashboard: {
    screen: DashboardStack,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: null,
      headerTransparent: true
    }),
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: null,
      headerTransparent: true
      // headerStyle: Style.headerStyle,
      // headerTintColor: Color.primary,
    }),
  },
  TermsAndConditions: {
    screen: TermsAndConditions,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerTransparent: true
    }),
  },
  Demands: {
    screen: DemandsStack,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: null,
      headerTransparent: true
    }),
  },
  HomePage: {
    screen: HomePageStack,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: null,
      headerTransparent: true
    }),
  },
  Upcoming: {
    screen: UpcomingStack,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: null,
      headerTransparent: true
    }),
  },
  Accesories: {
    screen: AccessoriesStack,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: null,
      headerTransparent: true
    }),
  },
  Search: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: null,
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: null,
      headerTransparent: true
    }),
  },
});

const Drawer = createDrawerNavigator(
  {
    Dashboard: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: 'Dashboard',
      },
    },
    Profile: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: 'Profile',
      },
    },
    TermsAndConditions: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: 'Terms and Condition',
      },
    },
    Demands: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demands',
      },
    },
    Homepage: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: 'Homepage',
      },
    },
    Upcoming: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: 'Upcoming',
      },
    },
    Accesories: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: 'Accesories',
      },
    },
    Search: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: 'Accesories',
      },
    },
  },
  {
    contentComponent: Slider,
  },
);

export default Drawer;
