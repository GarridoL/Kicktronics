import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, Dimensions, Share, TextInput, Image } from 'react-native';
import { Color, BasicStyles } from 'common';
import Style from './Style'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  redirect(route, item) {
    console.log("NAVIGATION", this.props.navigation);
    this.props.navigation.navigate(route, {
      details: item
    })
  }

  render() {
    const { item } = this.props
    return (
      <TouchableOpacity style={[Style.cardStyleWithShadow, { marginBottom: 13, width: '48%', height: '25%', paddingTop: 10 }, this.props.style]} onPress={() => this.redirect(this.props.route, item)}>
        <View>
          <Image source={item.url} style={{ width: '60%', height: '70%', marginLeft: 'auto', marginRight: 'auto', resizeMode: 'stretch' }} />
          <Text>{item.title}</Text>
          <Text>{this.props.page === 'homepage' ? item.price : item.date}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Card;