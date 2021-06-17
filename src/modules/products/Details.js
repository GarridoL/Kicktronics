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
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { details } = this.props.navigation.state.params
        // console.log('DETAILS', details['images'][0]);
        return (
            <View>
                <ScrollView>
                    <View style={{ height: height }}>
                        <View style={[Style.cardStyleWithShadow]}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={{uri: details?.picture}} style={{ width: 200, height: 200 }}></Image>
                                <Text style={{ fontSize: 20, color: 'gray' }}>{details.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row-reverse', marginTop: '10%' }}>
                                <View style={[Style.circledBorder, { marginLeft: 'auto' }]}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>USED OUT OF STOCK</Text>
                                </View>
                                <View style={[Style.circledBorder, { marginLeft: 'auto' }]}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('sizesStack', {routeName: 'sizes'})}>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>NEW FROM</Text>
                                        <Text>{details.lowestPrice}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginRight: '10%', justifyContent: 'center', }}>
                                    <Text>{details.category}</Text>
                                    <Text>{details.type}</Text>
                                    <Text>{details.brand} {details.colorCategory}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={[Style.btnWithShadow, { backgroundColor: Color.secondary, position: 'absolute', bottom: 0, width: '100%' }]}>
                    <Text style={{ color: Color.primary }}>SELL</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Details;