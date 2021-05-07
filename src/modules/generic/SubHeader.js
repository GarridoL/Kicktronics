import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, Dimensions, Share, TextInput } from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faChartLine,
  faCalendarAlt,
  faEllipsisH,
  faShoppingCart,
  faFire
} from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { Color, BasicStyles } from 'common';
import Style from './Style.js'
import { connect } from 'react-redux';
const width = Math.round(Dimensions.get('window').width);

class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search: null,
          activeIndex: null
        }
    }
    componentDidMount(){
        console.log('redner::::::::::::::');
    }

    navigateToScreen = async (route, index) => {
        console.log('[Index]::', index);
        if(this.state.activeIndex === index){
            await this.setState({ activeIndex: null });
            return
        }
        await this.setState({ activeIndex: index });
        // this.props.navigation.toggleDrawer();
        const navigateAction = NavigationActions.navigate({
          routeName: 'drawerStack',
          action: StackActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({routeName: route, params: {
                  initialRouteName: route,
                  index: 0
                }}),
            ]
          })
        });
        this.props.navigation.dispatch(navigateAction);
    }
    render(){
        const { activeIndex } = this.state;
        console.log('active index: ', activeIndex);
        return(
            <View style={{flex: 1, flexDirection: 'row', width: width, position: 'absolute', backgroundColor: 'white', zIndex: 1000, paddingTop: 10}}>
                <View style={{flex: 13, flexDirection: 'column', alignItems: 'center',  borderBottomColor: activeIndex == 1 ? 'black' : '', borderBottomWidth: activeIndex == 1 ? 4 : null}}>
                    <TouchableOpacity onPress={() => this.navigateToScreen('HomePage', 1)}>
                        <FontAwesomeIcon icon={faShoppingCart} size={30}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 13, flexDirection: 'column', alignItems: 'center', borderBottomColor: activeIndex == 2 ? 'black' : '', borderBottomWidth: activeIndex == 2 ? 4 : null}}>
                    <TouchableOpacity onPress={() => this.navigateToScreen('Demands', 2)}>
                        <FontAwesomeIcon icon={faFire} size={30}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 13, flexDirection: 'column', alignItems: 'center', borderBottomColor: activeIndex == 3 ? 'black' : '', borderBottomWidth: activeIndex == 3 ? 4 : null}}>
                    <TouchableOpacity onPress={() => this.navigateToScreen('Upcoming', 3)}>
                        <FontAwesomeIcon icon={faCalendarAlt} size={30}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 13, flexDirection: 'column', alignItems: 'center', borderBottomColor: activeIndex == 4 ? 'black' : '', borderBottomWidth: activeIndex == 4 ? 4 : null}}>
                    <TouchableOpacity onPress={() => this.navigateToScreen('Accesories', 4)}>
                        <FontAwesomeIcon icon={faEllipsisH} size={30}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    setActiveHeader: () => {(active) => dispatch(actions.setActiveHeader(active))}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubHeader);