import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
  Share,
  TextInput,
} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faChartLine,
  faCalendarAlt,
  faEllipsisH,
  faShoppingCart,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import {faCopy} from '@fortawesome/free-regular-svg-icons';
import {Color, BasicStyles} from 'common';
import Style from './Style.js';
import {connect} from 'react-redux';
const width = Math.round(Dimensions.get('window').width);

const menus = [
  {
    name: 'Home',
    icon: faShoppingCart,
    route: 'HomePage',
  },
  {
    name: 'Demands',
    icon: faFire,
    route: 'Demands',
  },
  {
    name: 'Upcoming',
    icon: faCalendarAlt,
    route: 'Upcoming',
  },
  {
    name: 'Accessories',
    icon: faEllipsisH,
    route: 'Accesories',
  },
];
class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      activeIndex: 0,
    };
  }
  componentDidMount() {
    this.props.setActiveIndex(0)
  }

  navigateToScreen = (route, index) => {
    this.props.setActiveIndex(index);
    console.log('[indexs]', this.props.state.index);
    const navigateAction = NavigationActions.navigate({
      routeName: 'drawerStack',
      action: StackActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({
            routeName: route,
            params: {
              initialRouteName: route,
              index: index,
            },
          }),
        ],
      }),
    });
    this.props.navigation.dispatch(navigateAction);
  };
  render() {
    const {index} = this.props.state;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: width,
          position: 'absolute',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          zIndex: 1000,
        }}>
        {menus.map((item, ind) => (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '25%',
              borderBottomColor:
                index == ind ? 'black' : 'white',
              borderBottomWidth: 4,
              height: 50,
            }}
            onPress={() => this.navigateToScreen(item.route, ind)}>
            <FontAwesomeIcon
              icon={item.icon}
              size={20}
              color={
                index == ind ? Color.secondary : Color.gray
              }></FontAwesomeIcon>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {
    setActiveHeader: () => {
      active => dispatch(actions.setActiveHeader(active));
    },
    setActiveIndex: (index) =>  dispatch(actions.setActiveIndex(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
