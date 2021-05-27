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
import Style from '../Style.js'
import { connect } from 'react-redux'
import { Routes, Color, Helper, BasicStyles } from 'common';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

let sizes = [
    { 'sizes': 4, 'price': '$200', 'details': 'ORIGINAL BOX' },
    { 'sizes': 4.5, 'price': '$250', 'details': 'ORIGINAL BOX' },
    { 'sizes': 5, 'price': '$270', 'details': 'ORIGINAL BOX' },
    { 'sizes': 5.5, 'price': '$300', 'details': 'ORIGINAL BOX' },
    { 'sizes': 6, 'price': '$350', 'details': 'ORIGINAL BOX' },
    { 'sizes': 6.5, 'price': '$400', 'details': 'ORIGINAL BOX' },
    { 'sizes': 8, 'price': '$500', 'details': 'ORIGINAL BOX' },
    { 'sizes': 8.5, 'price': '$550', 'details': 'ORIGINAL BOX' },
    { 'sizes': 10, 'price': '$700', 'details': 'ORIGINAL BOX' },
    { 'sizes': 10.5, 'price': '$760', 'details': 'ORIGINAL BOX' },
]
class AvailebleSize extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sizes: ["1"],
        }
    }

    componentDidMount() {
        this.sizeCounter();
    }

    async sizeCounter() {
        let number = 1;
        while (number != 24) {
            number += 0.5;
            let temp = this.state.sizes.concat(number.toString());
            await this.setState({ sizes: temp });
        }
        // console.log(this.state.sizes);
    }

    render() {
        const { sizes } = this.state
        return (
            <View>
                <View style={[Style.cardStyleWithShadow]}>
                    <View style={{ flexDirection: 'row', paddingBottom: 10, paddingTop: 10 }}>
                        <View style={{ flex: 13, flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Sizes</Text>
                        </View>
                        <View style={{ flex: 13, flexDirection: 'column', alignItems: 'center' }}>
                            <Text>Highest Offer</Text>
                        </View>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {
                            sizes.map(el => {
                                return (
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('createOfferStack')}>
                                        <View style={[Style.cardStyleWithShadow]}>
                                            <View style={{ flexDirection: 'row', paddingBottom: 10, paddingTop: 10 }}>
                                                <View style={{ flex: 13, flexDirection: 'column', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{el}</Text>
                                                </View>
                                                <View style={{ flex: 13, flexDirection: 'column', alignItems: 'center' }}>
                                                    <Text>-- --</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default AvailebleSize;