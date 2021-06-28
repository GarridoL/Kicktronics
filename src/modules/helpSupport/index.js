import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableHighlight,
    Text,
    ScrollView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    BackHandler,
    Dimensions
} from 'react-native';
import Style from './Style.js'
import { connect } from 'react-redux'
import { Routes, Color, Helper, BasicStyles } from 'common';
import SubHeader from 'modules/generic/SubHeader.js'
import Footer from 'modules/generic/Footer.js'
import Card from 'modules/generic/Card.js'
import { SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Support extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(this.props.navigation.state.params);
        return (
            <SafeAreaView>
                <View style={{
                    height: height,
                    // flex: 1,
                    // backgroundColor: '#F5F5F5',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10
                }}>
                    <TouchableOpacity style={{borderBottomColor: Color.lightGray, borderBottomWidth: 2, paddingBottom: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Customer Service</Text>
                            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
export default Support