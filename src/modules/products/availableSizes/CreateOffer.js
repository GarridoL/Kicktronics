import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    Dimensions,
    TouchableOpacity
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
class CreateOffer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sizes: ["1"],
        }
    }

    componentDidMount() {
    }

    render() {
        const { sizes } = this.state
        return (
            <View style={{flex: 1}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={[Style.cardStyleWithShadow, { flex: 13, flexDirection: 'column', alignItems: 'center', backgroundColor: Color.secondary, paddingTop: 15, paddingBottom: 15}]}>
                        <Text style={{color:'white'}}>Highest Offer</Text>
                    </View>
                    <View style={[Style.cardStyleWithShadow, { flex: 13, flexDirection: 'column', alignItems: 'center', backgroundColor: Color.secondary, paddingTop: 15, paddingBottom: 15 }]}>
                        <Text style={{color:'white'}}>Lowest Price</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput  placeholder={'$00.00'} style={{height: '50%', fontSize: 50}}></TextInput>
                </View>
                <TouchableOpacity style={[Style.btnWithShadow, { backgroundColor: Color.secondary, marginRight: 'auto', marginLeft: 'auto'}]}>
                    <Text style={{ color: Color.primary }}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CreateOffer;