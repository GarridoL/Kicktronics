import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faBars, faShareSquare} from '@fortawesome/free-solid-svg-icons';
import Details from 'modules/products/Details.js';
import {NavigationActions} from 'react-navigation';
import {BasicStyles, Color} from 'common';
import {connect} from 'react-redux';
const width = Math.round(Dimensions.get('window').width);
class HeaderOptions extends Component {
  constructor(props) {
    super(props);
  }
  back = () => {
    this.props.navigationProps.pop();
  };
  render() {
    const {theme} = this.props.state;
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.back.bind(this)}>
          {/*Donute Button Image */}
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={BasicStyles.headerBackIconSize}
            style={{color: theme ? theme.secondary : Color.secondard}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {};
};
let HeaderOptionsConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderOptions);

const DetailsStack = createStackNavigator({
  termsAndConditionsScreen: {
    screen: Details,
    navigationOptions: ({navigation, params}) => ({
      title: '',
      headerLeft: <HeaderOptionsConnect navigationProps={navigation} />,
      headerRight: (
        <View style={{marginRight: 10}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('reportStack', {
              itemKey: navigation.state.params.details.document_id
            })}>
              <FontAwesomeIcon icon={faShareSquare} color={'gray'} size={20} style={{marginRight:5}}></FontAwesomeIcon>
            <Text>Report Issues</Text>
          </TouchableOpacity>
        </View>
      ),
      headerTitleStyle: {marginLeft: -20},
      headerStyle: {elevation: 0},
      // headerTransparent:true,
      ...BasicStyles.drawerHeader1,
    }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsStack);
