import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
  Share,
  TextInput,
  Image,
} from 'react-native';
import {Color, BasicStyles} from 'common';
import Style from './Style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faImage} from '@fortawesome/free-regular-svg-icons';
import RNFetchBlob from 'rn-fetch-blob';
import {isInteger} from 'formik';
import {connect} from 'react-redux';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    };
  }

  redirect(route, item) {
    console.log(item);
    console.log('NAVIGATION', this.props.state);
    const {user} = this.props.state
    if(user !== null){
      this.props.navigation.navigate(route, {
        details: item,
      });
    }else{
      this.props.navigation.navigate('noAccountStack');
    }
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
    const {item} = this.props;
    let image = item?.picture;
    let date =
      item.release == '' || isInteger(item.release) || isNaN(item.release)
        ? null
        : new Date(item.release);
    let dateRelease =
      date !== null
        ? this.state.months[date.getMonth()] + ' ' + date.getDate()
        : 'No Date';
    let temp = image.split('?', image.lastIndexOf('%2') + 1);
    // console.log('[PAGE]', this.props.page);
    return (
      <View
        style={[
          Style.cardStyleWithShadow,
          {marginBottom: '10%', width: '48%', height: 200, paddingTop: 10},
          this.props.style,
        ]}>
        <TouchableOpacity onPress={() => this.redirect(this.props.route, item)}>
          {this.props.page !== 'accessories' ? (
            <View>
              {(this.props.page === 'homepage' && (
                  <View>
                    {item.lowestPrice > 0 && (
                      <View>
                        <Text style={Style.fontStyle}>From</Text>
                        <Text style={Style.fontStyle}>{'US$ ' + item.lowestPrice}</Text>
                      </View>
                    )}
                    <Image
                      source={{uri: image}}
                      style={{
                        width: '60%',
                        height: 100,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        resizeMode: 'stretch',
                      }}
                    />
                    <Text style={{fontSize: 12}}>{item.name}</Text>
                  </View>
                ))}
              {this.props.page === 'upcoming' && (
                <View>
                  <Text style={Style.fontStyle}>From</Text>
                  <Text style={Style.fontStyle}>{dateRelease}</Text>
                  <Image
                    source={{uri: image}}
                    style={{
                      width: '60%',
                      height: 100,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      resizeMode: 'stretch',
                    }}
                  />
                  <Text style={{fontSize: 12}}>{item.name}</Text>
                </View>
              )}
              {(this.props.page === 'search' && (
                  <View>
                    {item.lowestPrice > 0 && (
                      <View>
                        <Text style={Style.fontStyle}>From</Text>
                        <Text style={Style.fontStyle}>{'US$ ' + item.lowestPrice}</Text>
                      </View>
                    )}
                    <Image
                      source={{uri: image}}
                      style={{
                        width: '60%',
                        height: 100,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        resizeMode: 'stretch',
                      }}
                    />
                    <Text style={{fontSize: 12}}>{item.name}</Text>
                  </View>
                ))}
            </View>
          ) : (
            <View>
              <Image
                source={{uri: image}}
                style={{
                  width: '60%',
                  height: '70%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  resizeMode: 'stretch',
                }}
              />
              <Text style={{fontSize: 12}}>{item.name}</Text>
              <Text style={{fontSize: 12}}>{'$ ' + item.price}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
