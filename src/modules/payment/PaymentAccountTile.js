import React, { Component } from 'react';
import { Color } from 'common';
import styles from './Styles';
import { Text, View, StyleSheet, ScrollView, Switch, Image, TextInput, Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);

class PaymentMethods extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.PaymentTileContainer}>
                <View style={styles.PaymentTileImage}>
                    <Image source={this.props.src} />
                </View>
                <View style={{ paddingLeft: 25 }}>
                    <Text style={styles.PaymentTileText}>Card Number : *************</Text>
                    <Text style={styles.PaymentTileText}>Expiration Date : 10/20</Text>
                </View>
            </View>
        );
    }
}

export default PaymentMethods;
