import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image
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
class Checkout extends Component {
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
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('assets/logo.png')} style={{ width: 200, height: 200 }}></Image>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>Addidas Plain White</Text>
                        <Text>FDS424</Text>
                        <Text>Men • Size 6.5 • New • Original Box</Text>
                    </View>
                </View>
                <View style={{ paddingLeft: '8%', paddingRight: '8%', marginTop: height - 550 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '3%'}}>
                        <Text>Your Total</Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'gray', fontWeight: 'bold' }}>$400.00(Shipping not included)</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '3%' }}>
                        <Text>Ship to</Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'gray', fontWeight: 'bold' }}>Add address</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5%' }}>
                        <Text>Paypal</Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'gray', fontWeight: 'bold' }}>Add payment</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={[Style.btnWithShadow, { backgroundColor: '#1aa3ff', marginRight: 'auto', marginLeft: 'auto' }]}>
                            <Text style={{ color: Color.primary }}>CHECKOUT WITH PAYPAL</Text>
                        </TouchableOpacity>
                        <Text>OR</Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#1aa3ff' }}>Checkout with Credit Card via Paypal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Checkout;