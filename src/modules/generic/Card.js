import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, Dimensions, Share, TextInput, Image } from 'react-native';
import { Color, BasicStyles } from 'common';
import Style from './Style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import RNFetchBlob from "rn-fetch-blob";
import { isInteger } from 'formik';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    let date = item.release == '' || isInteger(item.release) || isNaN(item.release) ? null : new Date(item.release);
    let dateRelease = date !== null ? this.state.months[date.getMonth()] + ' ' + date.getDate() : 'No Date';
    let temp = image.split('?', (image.lastIndexOf('%2') + 1))
    // console.log('[IMAGE]', temp[0] !== undefined ? temp[0].substr(temp[0].lastIndexOf('%2') + 1) : null);
    return (
      <View  style={[Style.cardStyleWithShadow, { marginBottom: '10%', width: '48%', height: 200, paddingTop: 10}, this.props.style]}>
        <TouchableOpacity onPress={() => this.redirect(this.props.route, item)}>
          {
            this.props.page !== 'accessories' ? (
              <View>
                <Text>From</Text>
                <Text>{this.props.page === 'homepage' ? "$ " + item.lowestPrice : dateRelease}</Text>
                <Image source={{ uri: image }}
                  style={{ width: '60%', height: 100, marginLeft: 'auto', marginRight: 'auto', resizeMode: 'stretch' }} />
                <Text>{item.name}</Text>
              </View>
            ) : (
              <View>
                <Image source={{ uri: image }}
                  style={{ width: '60%', height: '70%', marginLeft: 'auto', marginRight: 'auto', resizeMode: 'stretch' }} />
                <Text>{item.name}</Text>
                <Text>{"$ " + item.price}</Text>
              </View>
            )
          }
        </TouchableOpacity>
      </View>
    )
  }
}

export default Card;