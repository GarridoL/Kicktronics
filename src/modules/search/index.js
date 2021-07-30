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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faBars,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import TextInputWithIcon from 'components/InputField/TextInputWithIcon.js';
import { TextInput } from 'react-native';

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
      sizes: ['1'],
      isLoading: false,
      selectedType: 'All Type',
      selectedSize: '1',
      selectedBrand: 'All Brands',
      title: null,
      type: null,
      size: null,
      data: [],
      limit: 5,
      startAt: 1,
      currentFilter: 'searchAll',
      scrolling: false
    };
  }

  componentDidMount() {
    this.sizeCounter();
    this.searchAll('1');
  }

  async sizeCounter() {
    let number = 1;
    while (number != 24) {
      number += 0.5;
      let temp = this.state.sizes.concat(number.toString());
      await this.setState({ sizes: temp });
    }
  }

  defaultSearch = async text => {
    let temp = [];
    console.log('[TEXT]', text);
    this.setState({ isLoading: true });
    firestore()
      .collection('sneakers')
      .where(`search.${text}`, '==', true)
      .get()
      .then(query => {
        console.log('----------', query);
        query.forEach(doc => {
          console.log('=========>>>>>>>>', doc);
          this.setState({ isLoading: true });
          doc.data()['document_id'] = doc.id;
          temp.push(doc.data());
          this.setState({ data: this.state.scrolling ?  _.uniqBy([...this.state.data, ...temp], 'id') : temp });
        });
      });
  };

  searchAll = async selectedSize => {
    let temp = [];
    this.setState({ isLoading: true });
    firestore()
      .collection('sizes')
      .doc(selectedSize)
      .collection('owns')
      .limit(this.state.limit)
      .orderBy('brand')
      .startAfter(this.state.startAt)
      .get()
      .then(querySnapshot => {
        this.setState({ isLoading: false });
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(async documentSnapshot => {
            firestore()
              .collection('sneakers')
              .doc(documentSnapshot.id)
              .get()
              .then(querySnapshot1 => {
                querySnapshot1.data()['document_id'] = querySnapshot1.id;
                if(this.state.scrolling) {
                  this.state.data.push(querySnapshot1.data());
                } else {
                  temp.push(querySnapshot1.data());
                  this.setState({ data: temp });
                }
              });
          });
        } else {
          this.setState({ data: temp });
        }
      });
  };

  searchWithBrand = async (selectedSize, selectedBrand) => {
    let temp = [];
    this.setState({ isLoading: true });
    firestore()
      .collection('sizes')
      .doc(selectedSize)
      .collection('owns')
      .where('brand', '==', selectedBrand)
      .limit(this.state.limit)
      .startAfter(this.state.startAt)
      .get()
      .then(querySnapshot => {
        this.setState({ isLoading: false });
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(async documentSnapshot => {
            firestore()
              .collection('sneakers')
              .doc(documentSnapshot.id)
              .get()
              .then(querySnapshot1 => {
                querySnapshot1.data()['document_id'] = querySnapshot1.id;
                if(this.state.scrolling) {
                  this.state.data.push(querySnapshot1.data());
                } else {
                  temp.push(querySnapshot1.data());
                  this.setState({ data: temp });
                }
              });
          });
        } else {
          this.setState({ data: temp });
        }
      });
  };

  searchWithType = async (selectedType, selectedSize) => {
    let temp = [];
    this.setState({ isLoading: true });
    firestore()
      .collection('sizes')
      .doc(selectedSize)
      .collection('owns')
      .where('type', '==', selectedType)
      .limit(this.state.limit)
      .orderBy('brand')
      .startAfter(this.state.startAt)
      .get()
      .then(querySnapshot => {
        this.setState({ isLoading: false });
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(async documentSnapshot => {
            firestore()
              .collection('sneakers')
              .doc(documentSnapshot.id)
              .get()
              .then(querySnapshot1 => {
                querySnapshot1.data()['document_id'] = querySnapshot1.id;
                if(this.state.scrolling) {
                  this.state.data.push(querySnapshot1.data());
                } else {
                  temp.push(querySnapshot1.data());
                  this.setState({ data: temp });
                }
              });
          });
        } else {
          this.setState({ data: temp });
        }
      });
  };

  searchWithTypeAndBrand = async (
    selectedType,
    selectedSize,
    selectedBrand,
  ) => {
    let temp = [];
    this.setState({ isLoading: true });
    firestore()
      .collection('sizes')
      .doc(selectedSize)
      .collection('owns')
      .where('brand', '==', selectedBrand)
      .where('type', '==', selectedType)
      .limit(this.state.limit)
      .orderBy('brand')
      .startAfter(this.state.startAt)
      .get()
      .then(querySnapshot => {
        this.setState({ isLoading: false });
        if (querySnapshot.size > 0) {
          querySnapshot.forEach(async documentSnapshot => {
            firestore()
              .collection('sneakers')
              .doc(documentSnapshot.id)
              .get()
              .then(querySnapshot1 => {
                querySnapshot1.data()['document_id'] = querySnapshot1.id;
                if(this.state.scrolling) {
                  this.state.data.push(querySnapshot1.data());
                } else {
                  temp.push(querySnapshot1.data());
                  this.setState({ data: temp });
                }
              });
          });
        } else {
          this.setState({ data: temp });
        }
      });
  };

  search = async (selectedType, selectedSize, selectedBrand) => {
    this.setState({
      startAt: 1,
      scrolling: false
    })
    if (selectedType !== 'All Type' && selectedBrand !== 'All Brands') {
      console.log('searchWithTypeAndBrand-----------');
      this.setState({ currentFilter: 'searchWithTypeAndBrand' })
      this.searchWithTypeAndBrand(selectedType, selectedSize, selectedBrand);
    } else if (selectedType !== 'All Type' && selectedBrand === 'All Brands') {
      console.log('searchWithType----------');
      this.setState({ currentFilter: 'searchWithType' })
      this.searchWithType(selectedType, selectedSize);
    } else if (selectedType === 'All Type' && selectedBrand !== 'All Brands') {
      console.log('searchWithBrand----------------');
      this.setState({ currentFilter: 'searchWithBrand' })
      this.searchWithBrand(selectedSize, selectedBrand);
    } else {
      console.log('searchAll------------');
      this.setState({ currentFilter: 'searchAll' })
      this.searchAll(selectedSize);
    }
  };

  renderBrands(brand) {
    const { data, isLoading, currentFilter, selectedSize, selectedBrand, selectedType } = this.state;
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 100 }}
        onScroll={(event) => {
          let scrollingHeight = event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y
          let totalHeight = event.nativeEvent.contentSize.height
          if (event.nativeEvent.contentOffset.y <= 0) {
            if (isLoading == false) {
              // this.retrieve(false) 
            }
          }
          if (Math.round(scrollingHeight) >= Math.round(totalHeight)) {
            if (isLoading == false) {
              this.setState({ startAt: this.state.limit + this.state.startAt, scrolling: true });
              if (currentFilter === 'searchAll') {
                this.searchAll(selectedSize);
              } else if (currentFilter === 'searchWithTypeAndBrand') {
                this.searchWithTypeAndBrand(selectedType, selectedSize, selectedBrand);
              } else if (currentFilter === 'searchWithType') {
                this.searchWithType(selectedType, selectedSize);
              } else if (currentFilter === 'searchWithBrand') {
                this.searchWithTypeAndBrand(selectedType, selectedSize, selectedBrand);
              }
            }
          }
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
          {data &&
            data.length > 0 &&
            data.map((el, index) => {
              return (
                <Card
                  key={index}
                  item={el}
                  style={{ height: 150, marginTop: 10 }}
                  route={'detailsStack'}
                  page={'search'}
                  navigation={this.props.navigation}
                />
              );
            })}
        </View>
      </ScrollView>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            marginBottom: 10,
            // borderBottomColor: 'black',
            // borderBottomWidth: 1,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 30,
              width: '100%',
              height: 40,
            }}>
            <TextInput
              placeholder={'Search'}
              onChangeText={search => this.defaultSearch(search)}></TextInput>
          </View>
        </View>
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
              <TouchableOpacity>
                <Picker
                  selectedValue={this.state.selectedType}
                  style={[
                    // Style.cardStyleWithShadow,
                    {
                      height: 50,
                      width: 150,
                      marginTop: 10,
                      justifyContent: 'center',
                      backgroundColor: 'white',
                    },
                  ]}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({ selectedType: itemValue });
                    this.search(
                      itemValue,
                      this.state.selectedSize,
                      this.state.selectedBrand,
                    );
                  }}>
                  {type.map((el, index) => {
                    return <Picker.Item key={index} label={el} value={el} />;
                  })}
                </Picker>
                <Text
                  style={{
                    width: '100%',
                    height: 60,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                  }}>
                  {' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '50%', alignItems: 'center' }}>
              <Text>Select your size</Text>
              <TouchableOpacity>
                <Picker
                  selectedValue={this.state.selectedSize}
                  style={[
                    // Style.cardStyleWithShadow,
                    {
                      height: 50,
                      width: 150,
                      marginTop: 10,
                      justifyContent: 'center',
                      // backgroundColor: 'white',
                    },
                  ]}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({ selectedSize: itemValue });
                    this.search(
                      this.state.selectedType,
                      itemValue,
                      this.state.selectedBrand,
                    );
                  }}>
                  {this.state.sizes.length > 0 &&
                    this.state.sizes.map((el, index) => {
                      return (
                        <Picker.Item key={index} label={el} value={el} />
                      );
                    })}
                </Picker>
                <Text
                  style={{
                    width: '100%',
                    height: 60,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                  }}>
                  {' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ marginTop: '5%' }}>Select the brand</Text>
          <View style={{
            flexDirection: 'row',
            marginTop: 10,
            height: 70
          }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ selectedBrand: null });
                  this.search(
                    this.state.selectedType,
                    this.state.selectedSize,
                    'All Brands',
                  );
                }}
                style={[
                  Style.cardStyleWithShadow,
                  {
                    height: 45,
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
                      this.search(
                        this.state.selectedType,
                        this.state.selectedSize,
                        el.title,
                      );
                    }}
                    style={[
                      {
                        height: 45,
                        marginTop: 10,
                        width: 150,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:
                          this.state.selectedBrand === el.title ? 'gray' : '',
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
            </ScrollView>
          </View>
          {this.renderBrands('all')}
          {isLoading === true && (
            // <View style={{position: 'absolute'}}>
            <Spinner mode="overlay" />
            // </View>
          )}
        </View>
        <Footer navigation={this.props.navigation} index={2} />
      </View>
    );
  }
}
export default Search;
