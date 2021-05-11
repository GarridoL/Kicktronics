import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faBars, faEllipsisH, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import ProfileEnhance from 'modules/profileEnhance/index.js';
import {NavigationActions} from 'react-navigation';
import {BasicStyles, Color} from 'common';
import {connect} from 'react-redux';
import Style from './Style.js'
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

const ProfileStack = createStackNavigator({
  termsAndConditionsScreen: {
    screen: ProfileEnhance,
    navigationOptions: ({navigation}) => ({
      title: 'Lalaine',
      headerLeft: <HeaderOptionsConnect navigationProps={navigation} />,
      headerRight: <View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faEllipsisH} style={{marginRight: 20}} size={25}></FontAwesomeIcon>
        </TouchableOpacity>
      </View>,
      headerTitleStyle:{marginLeft: '30%'},
      // headerStyle:{elevation: 0},
      headerStyle: Style.headerStyle,
      // headerTransparent:true,
      ...BasicStyles.drawerHeader1
    }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileStack);
