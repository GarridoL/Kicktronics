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
  Dimensions,
} from 'react-native';
import Style from './Style.js';
import {connect} from 'react-redux';
import {Routes, Color, Helper, BasicStyles} from 'common';
import SubHeader from 'modules/generic/SubHeader.js';
import Footer from 'modules/generic/Footer.js';
import Card from 'modules/generic/Card.js';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {details} = this.props.navigation.state.params;
    // console.log('DETAILS', details['images'][0]);
    return (
      <View>
        <ScrollView style={{backgroundColor: Color.lightGray}}>
          <View
            style={{
              minHeight: height,
              backgroundColor: Color.lightGray,
              marginBottom:
                details['images'] !== null && details['images'].length > 0
                  ? details['images'].length + 70 + '%'
                  : height,
            }}>
            <View style={{backgroundColor: 'white', height: '35%'}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={{uri: details?.picture}}
                  style={{width: 200, height: 200}}></Image>
                <Text style={{fontSize: 20, color: 'gray'}}>
                  {details.name}
                </Text>
              </View>
              <View style={{flexDirection: 'row-reverse', marginTop: '10%'}}>
                <View
                  style={[
                    Style.circledBorder,
                    {
                      marginLeft: 'auto',
                      position: 'absolute',
                      top: 30,
                      left: 20,
                    },
                  ]}>
                  <Text style={{fontSize: 12, color: Color.gray}}>
                    Used out of stock
                  </Text>
                </View>
                <View
                  style={[
                    Style.circledBorder,
                    {
                      marginLeft: 'auto',
                      position: 'absolute',
                      top: 0,
                      left: 110,
                    },
                  ]}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('sizesStack', {
                        routeName: 'sizes',
                      })
                    }>
                    <Text style={{fontSize: 12, color: Color.gray}}>
                      NEW FROM
                    </Text>
                    <Text style={{fontSize: 12, color: Color.gray}}>
                      {details.lowestPrice}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginRight: '10%',
                    justifyContent: 'center',
                    position: 'absolute',
                    right: 0,
                    top: 30,
                  }}>
                  <Text style={{marginBottom: 10}}>{details.type}</Text>
                  <Text style={{marginBottom: 10}}>{details.category}</Text>
                  <Text>
                    {details.brand} {details.colorCategory}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{minHeight: '100%'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginTop: 70,
                }}>
                {details &&
                  details.images &&
                  details.images.length > 0 &&
                  details.images.map(el => (
                    <TouchableOpacity
                      style={[
                        Style.cardStyleWithShadow,
                        {
                          marginBottom: 13,
                          width: '48%',
                          height: 200,
                          paddingTop: 10,
                        },
                        this.props.style,
                      ]}
                      onPress={() => this.redirect(this.props.route, item)}>
                      <View>
                        {/* <Text>{image}</Text> */}
                        <Image
                          source={{uri: el}}
                          style={{
                            width: '60%',
                            height: '100%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            resizeMode: 'stretch',
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={[
            Style.btnWithShadow,
            {position: 'absolute', bottom: -20, width: '100%'},
          ]}
          onPress={() => this.props.navigation.navigate('sellStack')}>
          <Text style={{color: Color.primary}}>SELL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Details;
