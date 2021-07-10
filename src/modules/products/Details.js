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
import {Spinner} from 'components';
import firestore from '@react-native-firebase/firestore';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: false
    };
  }

  componentDidMount() {
    const {details} = this.props.navigation.state.params;
    console.log('=====>>>>>>', details);
    let tempData = [];
    this.setState({isLoading: true})
    firestore()
      .collection('owns')
      .where('itemKey', '==', details.document_id)
      .get()
      .then(querySnapshot => {
        console.log('Total sneakers: ', querySnapshot.size);
        details['size'] = querySnapshot.size;
        this.setState({data: details});
        querySnapshot.forEach(documentSnapshot => {
          this.setState({isLoading: false})
          documentSnapshot.data()['ownId'] = documentSnapshot.id;
          tempData.push(documentSnapshot.data());
          console.log('=====>>>>>>');
        });
        details['owns'] = tempData;
        this.setState({data: details});
        this.setState({isLoading: false})
        // console.log('=====>>>>>>----------', details);
      });
  }

  render() {
    const {data, isLoading} = this.state;
    // console.log('DETAILS', data);
    return (
      <View style={{flex: 1}}>
        {data !== null && (
          <View style={{flex: 1}}>
            <ScrollView style={{backgroundColor: Color.lightGray}}>
              <View
                style={{
                  minHeight: height,
                  backgroundColor: Color.lightGray,
                  marginBottom:
                    data['images'] !== null && data['images'].length > 0
                      ? data['images'].length + 70 + '%'
                      : height,
                }}>
                <View style={{backgroundColor: 'white', height: '35%'}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      source={{uri: data?.picture}}
                      style={{width: 200, height: 200}}></Image>
                    <Text style={{fontSize: 15, color: 'gray'}}>
                      {data.name}
                    </Text>
                  </View>
                  <View
                    style={{flexDirection: 'row-reverse', marginTop: '10%'}}>
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
                        {data.owns &&
                        data.owns !== undefined &&
                        data.owns.length > 0 &&
                        data?.owns[0].cond === 'New'
                          ? 'New'
                          : 'Used'}{' '}
                        out of stock
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
                            data: data?.owns,
                            type: data.type,
                            picture: data?.picture,
                            itemKey: data.document_id,
                          })
                        }>
                        <Text style={{fontSize: 12, color: Color.gray}}>
                          {data.owns &&
                          data.owns !== undefined &&
                          data.owns.length > 0 &&
                          data?.owns[0].cond === 'New'
                            ? 'NEW'
                            : 'USED'}{' '}
                          FROM
                        </Text>
                        <Text style={{fontSize: 12, color: Color.gray}}>
                          US${data.lowestPrice}
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
                      <Text style={{marginBottom: 10}}>{data.type}</Text>
                      <Text style={{marginBottom: 10}}>{data.category}</Text>
                      <Text>
                        {data.brand} {data.colorCategory}
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
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}>
                    {data &&
                      data.images &&
                      data.images.length > 0 &&
                      data.images.map(el => (
                        <TouchableOpacity
                          style={[
                            Style.cardStyleWithShadow,
                            {
                              marginBottom: 13,
                              width: '48%',
                              height: 150,
                              paddingTop: 10,
                            },
                            this.props.style,
                          ]}
                          onPress={() =>
                            this.props.navigation.navigate(
                              'previewImageStack',
                              {picture: el},
                            )
                          }>
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
            
          </View>
        )}
        <TouchableOpacity
            style={[
              Style.btnWithShadow,
              {position: 'absolute', bottom: -20, width: '100%'},
            ]}
            onPress={() => this.props.navigation.navigate('sellStack')}>
            <Text style={{color: Color.primary}}>SELL</Text>
          </TouchableOpacity>
        {isLoading ? <Spinner mode="overlay" /> : null}
      </View>
    );
  }
}

export default Details;
