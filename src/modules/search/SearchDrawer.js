import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from 'modules/search/index.js';
import TextInputWithIcon from 'components/InputField/TextInputWithIcon.js'
import {NavigationActions} from 'react-navigation';
import {BasicStyles, Color} from 'common';
import {connect} from 'react-redux';
import Style from './Style.js'
const width = Math.round(Dimensions.get('window').width);
class HeaderOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null
    }
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

const SearchStack = createStackNavigator({
  termsAndConditionsScreen: {
    screen: Search,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <HeaderOptionsConnect navigationProps={navigation} />,
      headerRight: <TextInputWithIcon icon={faSearch} placeholder={'Search'} onTyping={(text) => {
        console.log(text)
      }} style={{width: width-20, marginTop: 20, borderColor: '#000000', marginRight: 10}}/>,
      // headerTitleStyle: { marginLeft: '45%'},
      headerStyle: Style.headerStyle
    }),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchStack);
