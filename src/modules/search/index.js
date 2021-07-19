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

const brands = [
  { id: '1', url: require('assets/adidas.png'), title: 'Adidas' },
  { id: '2', url: require('assets/jordan.jpg'), title: 'Air-Jordan' },
  { id: '3', url: require('assets/nike.png'), title: 'Nike' },
  { id: '4', url: require('assets/asics.png'), title: 'Asics' },
  { id: '5', url: require('assets/converse.png'), title: 'Converse' },
  { id: '6', url: require('assets/diadora.png'), title: 'Diadora' },
  { id: '7', url: require('assets/ewing.png'), title: 'Ewing' },
  { id: '8', url: require('assets/newBalance.png'), title: 'New-Balance' },
  { id: '9', url: require('assets/puma.png'), title: 'Puma' },
  { id: '10', url: require('assets/reebok.png'), title: 'Reebook' },
  { id: '11', url: require('assets/soucony.png'), title: 'Soucony' },
  { id: '12', url: require('assets/underArmour.png'), title: 'Under-Armour' },
  { id: '13', url: require('assets/vans.png'), title: 'Vans' },
];
const type = ['All Type', 'Men', 'Women', 'Youth', 'Todler'];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: ["1"],
      isLoading: false,
      selectedType: 'All Type',
      selectedSize: '1',
      selectedBrand: 'All Brands',
      title: null,
      type: null,
      size: null,
      data: []
    };
  }

  componentDidMount() {
    this.sizeCounter();
    this.searchAll('1');
  }

  componentDidUpdate() {
    console.log(this.props.navigation?.state?.params?.search, 'searching');
    // if(this.props.navigation?.state?.params?.search) {
    //   let temp = []
    //   this.setState({ isLoading: true })
    //   firestore()
    //     .collection('sneakers')
    //     .where(this.props.navigation?.state?.params?.search, '==', true)
    //     .get()
    //     .then(querySnapshot1 => {
    //       temp.push(querySnapshot1.data())
    //       this.setState({ data: temp });
    //     });
    // }
  }

  async sizeCounter() {
    let number = 1;
    while (number != 24) {
      number += 0.5;
      let temp = this.state.sizes.concat(number.toString());
      await this.setState({ sizes: temp });
    }
  }

  searchAll = async (selectedSize) => {
    let temp = []
    this.setState({ isLoading: true })
    firestore()
      .collection('sizes')
      .doc(selectedSize)
      .collection('owns')
      .get()
      .then(querySnapshot => {
        this.setState({ isLoading: false })
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(async documentSnapshot => {
            firestore()
              .collection('sneakers')
              .doc(documentSnapshot.id)
              .get()
              .then(querySnapshot1 => {
                temp.push(querySnapshot1.data())
                this.setState({ data: temp });
              });
          });
        } else {
          this.setState({ data: temp });
        }
      });
  }

  searchWithBrand = async (selectedSize, selectedBrand) => {
    let temp = []
    this.setState({ isLoading: true })
    firestore()
      .collection('sizes')
      .doc(selectedSize)
      .collection('owns')
      .where('brand', '==', selectedBrand)
      .get()
      .then(querySnapshot => {
        this.setState({ isLoading: false })
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(async documentSnapshot => {
            firestore()
              .collection('sneakers')
              .doc(documentSnapshot.id)
              .get()
              .then(querySnapshot1 => {
                temp.push(querySnapshot1.data())
                this.setState({ data: temp });
              });
          });
        } else {
          this.setState({ data: temp });
        }
      });
  }

  searchWithType = async (selectedType, selectedSize) => {
    let temp = []
    this.setState({ isLoading: true })
    firestore()
      .collection('sizes')
      .doc(selectedSize)
      .collection('owns')
      .where('type', '==', selectedType)
      .get()
      .then(querySnapshot => {
        this.setState({ isLoading: false })
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(async documentSnapshot => {
            firestore()
              .collection('sneakers')
              .doc(documentSnapshot.id)
              .get()
              .then(querySnapshot1 => {
                temp.push(querySnapshot1.data())
                this.setState({ data: temp });
              });
          });
        } else {
          this.setState({ data: temp });
        }
      });
  }

  searchWithTypeAndBrand = async (selectedType, selectedSize, selectedBrand) => {
    let temp = []
    this.setState({ isLoading: true })
    firestore()
      .collection('sizes')
      .doc(selectedSize)
      .collection('owns')
      .where('brand', '==', selectedBrand)
      .where('type', '==', selectedType)
      .get()
      .then(querySnapshot => {
        this.setState({ isLoading: false })
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(async documentSnapshot => {
            firestore()
              .collection('sneakers')
              .doc(documentSnapshot.id)
              .get()
              .then(querySnapshot1 => {
                temp.push(querySnapshot1.data())
                this.setState({ data: temp });
              });
          });
        } else {
          this.setState({ data: temp });
        }
      });
  }




  search = async (selectedType, selectedSize, selectedBrand) => {
    if (selectedType !== 'All Type' && selectedBrand !== 'All Brands') {
      console.log('searchWithTypeAndBrand-----------');
      this.searchWithTypeAndBrand(selectedType, selectedSize, selectedBrand);
    } else if (selectedType !== 'All Type' && selectedBrand === 'All Brands') {
      console.log('searchWithType----------');
      this.searchWithType(selectedType, selectedSize);
    } else if (selectedType === 'All Type' && selectedBrand !== 'All Brands') {
      console.log('searchWithBrand----------------');
      this.searchWithBrand(selectedSize, selectedBrand);
    } else {
      console.log('searchAll------------');
      this.searchAll(selectedSize);
    }
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
          {data && data.length > 0 && data.map((el, index) => {
            return <Card key={index} item={el} style={{ height: '15%' }} page={'search'} />;
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
              height: height,
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
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({ selectedType: itemValue })
                    this.search(itemValue, this.state.selectedSize, this.state.selectedBrand);
                  }}>
                  {type.map((el, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={el}
                        value={el}
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
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({ selectedSize: itemValue });
                    this.search(this.state.selectedType, itemValue, this.state.selectedBrand);
                  }}>
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
                  onPress={() => {
                    this.setState({ selectedBrand: null })
                    this.search(this.state.selectedType, this.state.selectedSize, 'All Brands');
                  }
                  }
                  style={[
                    Style.cardStyleWithShadow,
                    {
                      height: '80%',
                      marginTop: 10,
                      width: 150,
                      justifyContent: 'center',
                    },
                  ]}>
                  <Text style={{ fontSize: 12, textAlign: 'center' }}>
                    All Brands
                  </Text>
                </TouchableOpacity>
                {brands.map(el => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ selectedBrand: el.title });
                        this.search(this.state.selectedType, this.state.selectedSize, el.title);
                      }}
                      style={[
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
