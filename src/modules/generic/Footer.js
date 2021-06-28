import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, Dimensions, Share, TextInput } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faHome,
    faSearch,
    faChartLine,
    faUser,
    faEllipsisH,
    faTag
} from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { Color, BasicStyles } from 'common';
import Style from './Style.js'
import { connect } from 'react-redux';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
const width = Math.round(Dimensions.get('window').width);

class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null
        }
    }
    navigateToScreen = async (route) => {
        const {user} = this.props.state
        console.log('=============', user);
        const navigateAction = NavigationActions.navigate({
            routeName: 'drawerStack',
            action: StackActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({
                        routeName: route, params: {
                            initialRouteName: route,
                            index: 0,
                            user: user
                        }
                    }),
                ]
            })
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        const { index } = this.props
        return (
            <View style={{
                flexDirection: 'row', 
                justifyContent: 'center', 
                width: width, 
                position: 'absolute', 
                bottom: 0, 
                backgroundColor: 'white', 
                zIndex: 1000,
                alignItems: 'center',
                height: 50
            }}>
                <View style={{ flex: 13, flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.navigateToScreen('HomePage')}>
                        <FontAwesomeIcon icon={faHome} color={index === 1 ? Color.secondary : Color.gray} size={20}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 13, flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.navigateToScreen('Search')}>
                        <FontAwesomeIcon icon={faSearch} color={index === 2 ? Color.secondary : Color.gray} size={20}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 13, flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.navigateToScreen('Dashboard')}>
                        <FontAwesomeIcon icon={faTag} color={index === 3 ? Color.secondary : Color.gray} size={20}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 13, flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.navigateToScreen('Profile')}>
                        <FontAwesomeIcon icon={faUser} color={index === 4 ? Color.secondary : Color.gray} size={20}></FontAwesomeIcon>
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
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubHeader);