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
  Dimensions,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import Style from './Style.js';
import { connect } from 'react-redux';
import { Routes, Color, Helper, BasicStyles } from 'common';
import SubHeader from 'modules/generic/SubHeader.js';
import Footer from 'modules/generic/Footer.js';
import { Spinner } from 'components';
import Card from 'modules/generic/Card.js';
import firestore from '@react-native-firebase/firestore';

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

let brands = [
  { id: '1', url: require('assets/adidas.png'), title: 'adidas' },
  { id: '2', url: require('assets/jordan.jpg'), title: 'jordan' },
  { id: '3', url: require('assets/nike.png'), title: 'nike' },
  { id: '4', url: require('assets/asics.png'), title: 'asics' },
  { id: '5', url: require('assets/converse.png'), title: 'converse' },
  { id: '6', url: require('assets/diadora.png'), title: 'diadora' },
  { id: '7', url: require('assets/ewing.png'), title: 'ewing' },
  { id: '8', url: require('assets/newBalance.png'), title: 'newBalance' },
  { id: '9', url: require('assets/puma.png'), title: 'puma' },
  { id: '10', url: require('assets/reebok.png'), title: 'reebook' },
  { id: '11', url: require('assets/soucony.png'), title: 'soucony' },
  { id: '12', url: require('assets/underArmour.png'), title: 'underArmour' },
  { id: '13', url: require('assets/vans.png'), title: 'vans' },
];

let response = {
  data: [
    { id: 1, url: require('assets/logo.png'), price: '$200', title: 'Adidas' },
    { id: 2, url: require('assets/logo2.png'), price: '$200', title: 'Nike' },
    { id: 3, url: require('assets/logo1.png'), price: '$200', title: 'Rebook' },
    {
      id: 4,
      url: require('assets/logo.png'),
      price: '$200',
      title: 'World Balance',
    },
    {
      id: 5,
      url: require('assets/logo2.png'),
      price: '$200',
      title: 'New Balance',
    },
    { id: 6, url: require('assets/logo1.png'), price: '$200', title: 'Snicker' },
    { id: 7, url: require('assets/logo.png'), price: '$200', title: 'Robetson' },
  ],
};

let type = [
  { type: 'All Type' },
  { type: 'Men' },
  { type: 'Women' },
  { type: 'Youth' },
  { type: 'Todler' },
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: ["1"],
      isLoading: false,
      selectedType: null,
      selectedSize: null,
      selectedBrand: null,
      title: null,
      type: null,
      size: null,
      data: []
    };
  }

  componentDidMount() {
    this.sizeCounter();
    this.selectBrand();
  }

  async sizeCounter() {
    let number = 1;
    while (number != 24) {
      number += 0.5;
      let temp = this.state.sizes.concat(number.toString());
      await this.setState({ sizes: temp });
    }
    // console.log(this.state.sizes);
  }

  async searchSize(selectedSize){
    console.log('[SIZE]', selectedSize);
    const {size} = this.state
    this.setState({size: selectedSize})
    firestore().collection('sizes').doc(selectedSize).get()
      .then((doc) => {
        console.log('============', doc.data());
        if(doc.exists){
          console.log('====', doc.data());
        }
      })
  }

  selectBrand() {
    const {title, type, size} = this.state
    console.log(title, type);
    this.setState({ isLoading: true })
    if(title !== null && type !== null && size !== null){
      firestore()
      .collection('sneakers')
      .where('search.' + title, '==', true)
      .where('type', '==', type)
      .limit(10)
      .get()
      .then(querySnapshot => {
        console.log('Total sneakers: ', querySnapshot.size);
        querySnapshot.forEach(async documentSnapshot => {
          this.setState({ isLoading: false })
          documentSnapshot.data().map(el => {
            console.log('======================', el);
          })
          let tempData = this.state.data.concat(documentSnapshot.data())
          await this.setState({ data: tempData })
        });
      });
    }
    if(title === null && type === null){
      firestore()
      .collection('sneakers')
      .limit(10)
      .get()
      .then(querySnapshot => {
        console.log('Total sneakers: ', querySnapshot.size);
        querySnapshot.forEach(async documentSnapshot => {
          this.setState({ isLoading: false })
          let tempData = this.state.data.concat(documentSnapshot.data())
          await this.setState({ data: tempData })
        });
      });
    }
    firestore()
      .collection('sneakers')
      .where('search.' + title, '==', true)
      .limit(10)
      .get()
      .then(querySnapshot => {
        console.log('Total sneakers: ', querySnapshot.size);
        querySnapshot.forEach(async documentSnapshot => {
          this.setState({ isLoading: false })
          let tempData = this.state.data.concat(documentSnapshot.data())
          await this.setState({ data: tempData })
          // console.log('Sneakers:================ ', documentSnapshot.id, documentSnapshot.data());
        });
      });
  }

  renderBrands(brand) {
    const { data, isLoading } = this.state
    return (
      <View style={{ marginTop: '40%' }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            height: height,
          }}>
          {data && data.length >0 && data.map(el => {
            return <Card item={el} style={{height: '15%'}} />;
          })}
          {
            isLoading === true && (
              <View style={{ position: 'absolute' }}>
                <Spinner mode="overlay" />
              </View>
            )
          }
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: response.data ? null : height,
              // flex: 1,
              backgroundColor: '#F5F5F5',
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 25 }}>Shop by Size</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{ width: '50%', alignItems: 'center' }}>
                <Text>Select your type</Text>
                <Picker
                  selectedValue={this.state.selectedType}
                  style={[
                    Style.cardStyleWithShadow,
                    {
                      height: 50,
                      width: 150,
                      marginTop: 10,
                      justifyContent: 'center',
                      backgroundColor: 'none',
                    },
                  ]}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ selectedType: itemValue })
                  }>
                  {type.map((el, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={el.type}
                        value={el.type}
                      />
                    );
                  })}
                </Picker>
              </View>
              <View style={{ width: '50%', alignItems: 'center' }}>
                <Text>Select your size</Text>
                <Picker
                  selectedValue={this.state.selectedSize}
                  style={[
                    Style.cardStyleWithShadow,
                    {
                      height: 50,
                      width: 150,
                      marginTop: 10,
                      justifyContent: 'center',
                      backgroundColor: 'none',
                    },
                  ]}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) =>
                    this.searchSize(itemValue)
                  }>
                  {this.state.sizes.length > 0 &&
                    this.state.sizes.map((el, index) => {
                      return <Picker.Item key={index} label={el} value={el} />;
                    })}
                </Picker>
              </View>
            </View>
            <Text style={{ marginTop: '5%' }}>Select the brand</Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ position: 'absolute', top: 100 }}>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 80 }}>
                <TouchableOpacity
                  onPress={() => this.setState({selectedBrand: null})}
                  style={[
                    Style.cardStyleWithShadow,
                    {
                      height: '80%',
                      marginTop: 10,
                      width: 150,
                      justifyContent: 'center',
                    },
                  ]}>
                  <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    All Brands
                  </Text>
                </TouchableOpacity>
                {brands.map(el => {
                  return (
                    <TouchableOpacity
                      onPress={() => this.setState({selectedBrand: el.title})}
                      style={[
                        Style.cardStyleWithShadow,
                        {
                          height: '80%',
                          marginTop: 10,
                          width: 150,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: this.state.selectedBrand === el.title ? 'gray' : ''
                        },
                      ]}>
                      <Image
                        source={el.url}
                        style={{
                          width: '50%',
                          height: '90%',
                          resizeMode: 'stretch',
                        }}></Image>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
            {this.renderBrands('all')}
          </View>
        </ScrollView>
        <Footer navigation={this.props.navigation} index={2} />
      </View>
    );
  }
}
export default Search;
