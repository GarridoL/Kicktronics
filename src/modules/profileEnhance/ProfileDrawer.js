import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBars, faEllipsisH, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import ProfileEnhance from 'modules/profileEnhance/index.js';
import { NavigationActions } from 'react-navigation';
import { BasicStyles, Color } from 'common';
import { connect } from 'react-redux';
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
      <TouchableOpacity onPress={() => {
        this.props.setModalOptions(!this.props.state.show)
      }}>
        <FontAwesomeIcon icon={faEllipsisH} style={{ marginRight: 20 }} size={25}></FontAwesomeIcon>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => ({ state: state });

const mapDispatchToProps = (dispatch) => {
  const { actions } = require('@redux');
  return {
    setModalOptions: (show) => { dispatch(actions.setModalOptions(show)) }
  };
};
let HeaderOptionsConnect = connect(mapStateToProps, mapDispatchToProps)(HeaderOptions);

const ProfileStack = createStackNavigator({
  termsAndConditionsScreen: {
    screen: ProfileEnhance,
    navigationOptions: ({ navigation }) => ({
      title: 'Lalaine',
      headerRight: <HeaderOptionsConnect navigationProps={navigation} />,
      headerTitleStyle: { marginLeft: '45%'},
      headerStyle: Style.headerStyle
    }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileStack);
