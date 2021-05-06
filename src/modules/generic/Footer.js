import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, Dimensions, Share, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faSearch,
  faChartLine,
  faUser,
  faEllipsisH
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
    render(){
        return(
            <View style={{flex: 1, flexDirection: 'row', width: width, position: 'absolute', bottom: 0, backgroundColor: 'white', zIndex: 1000, marginLeft: 30, paddingRight: 20, paddingTop: 10, paddingBottom: 5}}>
                <View style={{flex: 13, flexDirection: 'column'}}>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faHome} size={30}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 13, flexDirection: 'column'}}>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faSearch} size={30}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 13, flexDirection: 'column'}}>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faChartLine} size={30}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 13, flexDirection: 'column'}}>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faUser} size={30}></FontAwesomeIcon>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SubHeader;