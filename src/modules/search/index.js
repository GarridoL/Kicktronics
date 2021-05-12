import React, {Component} from 'react';
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

let brands = [
    {id: "1", url: require("assets/adidas.png"), title: "adidas"},
    {id: "2", url: require("assets/jordan.jpg"), title: "jordan"},
    {id: "3", url: require("assets/nike.png"), title: "nike"},
    {id: "4", url: require("assets/asics.png"), title: "asics"},
    {id: "5", url: require("assets/converse.png"), title: "converse"},
    {id: "6", url: require("assets/diadora.png"), title: "diadora"},
    {id: "7", url: require("assets/ewing.png"), title: "ewing"},
    {id: "8", url: require("assets/newBalance.png"), title: "newBalance"},
    {id: "9", url: require("assets/puma.png"), title: "puma"},
    {id: "10", url: require("assets/reebok.png"), title: "reebook"},
    {id: "11", url: require("assets/soucony.png"), title: "soucony"},
    {id: "12", url: require("assets/underArmour.png"), title: "underArmour"},
    {id: "13", url: require("assets/vans.png"), title: "vans"},
]

let response = {
    data: [
        {'id': 1, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'Adidas'},
        {'id': 2, 'url': require('assets/logo2.png'), 'price': '$200', 'title': 'Nike'},
        {'id': 3, 'url': require('assets/logo1.png'), 'price': '$200', 'title': 'Rebook'},
        {'id': 4, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'World Balance'},
        {'id': 5, 'url': require('assets/logo2.png'), 'price': '$200', 'title': 'New Balance'},
        {'id': 6, 'url': require('assets/logo1.png'), 'price': '$200', 'title': 'Snicker'},
        {'id': 7, 'url': require('assets/logo.png'), 'price': '$200', 'title': 'Robetson'}
    ]
}

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        console.log("[PROPS:] ", this.props.navigation.state.params);
    }

    renderBrands(brand){
        return (
            <View style={{marginTop: '40%'}}>
                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',  justifyContent:'space-between', height: height}}>
                        {
                        response.data.map(el => {
                            return (
                                <Card item={el} style={{height: '15%'}}/>
                            )
                        })
                        }
                </View>
            </View>
        )
    }

    render(){
        return (
            <View>
                <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{
                    height: response.data ? null : height,
                    // flex: 1,
                    backgroundColor: '#F5F5F5',
                    paddingLeft: 10,
                    paddingRight: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 25}}>Shop by Size</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <View style={{width: '50%', alignItems: 'center'}}>
                            <Text>Select your type</Text>
                            <TouchableOpacity style={[Style.cardStyleWithShadow, {height: 50, marginTop: 10, width: 150, justifyContent: 'center',}]}>
                                <Text style={{fontSize: 20,  textAlign: 'center'}}>All type</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '50%', alignItems: 'center'}}>
                            <Text>Select your size</Text>
                            <TouchableOpacity style={[Style.cardStyleWithShadow, {height: 50, width: 150, marginTop: 10, justifyContent: 'center',}]}>
                                <Text style={{fontSize: 20, textAlign: 'center'}}>All size</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{marginTop: '5%'}}>Select the brand</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{position: 'absolute', top: 100}}>
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 80}}>
                            <TouchableOpacity style={[Style.cardStyleWithShadow, {height: '80%', marginTop: 10, width: 150, justifyContent: 'center',}]}>
                                <Text style={{fontSize: 20, textAlign: 'center'}}>All Brands</Text>
                            </TouchableOpacity>
                            {
                                brands.map(el => {
                                    return (
                                        <TouchableOpacity style={[Style.cardStyleWithShadow, {height: '80%', marginTop: 10, width: 150, justifyContent: 'center', alignItems: 'center'}]}>
                                            <Image source={el.url} style={{width: '50%', height: '90%',  resizeMode: 'stretch'}}></Image>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                    {
                        this.renderBrands('all')
                    }
                </View>
                </ScrollView>
                <Footer navigation={this.props.navigation}  index={2}/>
            </View>
        )
    }
}
export default Search