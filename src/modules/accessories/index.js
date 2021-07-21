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
import firestore from '@react-native-firebase/firestore';
import { Spinner } from 'components';
import { SafeAreaView } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Accessories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false,
        }
    }
    componentDidMount() {
        // console.log('Got Users collection re');
        this.setState({ isLoading: true })
        firestore()
            .collection('accBackup')
            .limit(10)
            .get()
            .then(querySnapshot => {
                console.log('Total sneakers: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    this.setState({ isLoading: false })
                    let tempData = this.state.data.concat(documentSnapshot.data())
                    this.setState({ data: tempData })
                    // console.log('Sneakers:================ ', documentSnapshot.id, documentSnapshot.data());
                });
            });
    }

    render() {
        const { data } = this.state
        return (
            <SafeAreaView style={{ backgroundColor: '#F5F5F5' }}>
                <SubHeader navigation={this.props.navigation} index={3} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ flexGrow: 2 }}
                // ref={scrollRef} 
                >
                    <View style={{ marginBottom: data.length > 0 ? (data.length + 70) + '%' : height }}>
                        <View style={{ height: height, flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingTop: 50, }}>
                            {
                                data.map(el => {
                                    return (
                                        <Card item={el} page={'accessories'} route={'detailsStack'} navigation={this.props.navigation} />
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
                {
                    this.state.isLoading === true && (
                        <Spinner mode="overlay" />
                    )
                }
                <Footer navigation={this.props.navigation} index={1} />
            </SafeAreaView>
        )
    }
}
export default Accessories