import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, Dimensions, Share, TextInput, Image } from 'react-native';
import { Color, BasicStyles } from 'common';
import Style from './Style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import RNFetchBlob from "rn-fetch-blob";

class Card extends Component {
  constructor(props) {
    super(props)
    this.state={
      images: null,
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
  }

  redirect(route, item) {
    console.log("NAVIGATION", this.props.navigation);
    this.props.navigation.navigate(route, {
      details: item
    })
  }

  // componentDidMount(){
  //   const {item} = this.props
  //   const fs = RNFetchBlob.fs
  //   RNFetchBlob.config({
  //     fileCache: true
  //   })
  //     .fetch("GET", item?.picture)
  //     // the image is now dowloaded to device's storage
  //     .then(resp => {
  //       // the image path you can use it directly with Image component
  //       imagePath = resp.path();
  //       return resp.readFile("base64");
  //     })
  //     .then(base64Data => {
  //       // here's base64 encoded image
  //       console.log(base64Data);
  //       this.setState({images: base64Data})
  //       // remove the file from storage
  //       return fs.unlink(imagePath);
  //     });
  // }

  render() {
    const { item } = this.props
    let image = item?.picture
    let date = item.release !== undefined || item.release !==  '' ?  new Date(item.release) : null
    let dateRelease = date !== null ? this.state.months[date.getMonth()] + ' ' + date.getDate() : null;
    console.log(dateRelease);
    return (
      <TouchableOpacity style={[Style.cardStyleWithShadow, { marginBottom: 13, width: '48%', height: '25%', paddingTop: 10 }, this.props.style]} onPress={() => this.redirect(this.props.route, item)}>
        <View>
          {/* <Text>{image}</Text> */}
          <Image source={{ uri: image}} 
            style={{ width: '60%', height: '70%', marginLeft: 'auto', marginRight: 'auto', resizeMode: 'stretch' }} />

          {/* <Text>{item?.images?.length > 0 ? item?.images[0] : this?.images}</Text> */}
          <Text>{item.brand}</Text>
          <Text>{this.props.page === 'homepage' ? "$ " + item.lowestPrice : dateRelease}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Card;