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
  StatusBar,
} from 'react-native';
import Style from './Style.js';
import {connect} from 'react-redux';
import {Routes, Color, Helper, BasicStyles} from 'common';
import SubHeader from 'modules/generic/SubHeader.js';
import Footer from 'modules/generic/Footer.js';
import Card from 'modules/generic/Card.js';
import {Spinner} from 'components';
// import firebaseApi from 'services/api/firebaseApi'
import firestore from '@react-native-firebase/firestore';
import RNFetchBlob from 'rn-fetch-blob';
import {SafeAreaView} from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

let response = {
  data: [
    {
      id: 1,
      url: require('assets/logo.png'),
      price: '$200',
      title: 'Adidas',
      status: 'OUT OF STOCK',
      model: 'DFS434',
      category: 'Men',
    },
    {
      id: 2,
      url: require('assets/logo2.png'),
      price: '$200',
      title: 'Nike',
      status: 'OUT OF STOCK',
      model: 'DFS434',
      category: 'Men',
    },
    {
      id: 3,
      url: require('assets/logo1.png'),
      price: '$200',
      title: 'Rebook',
      status: 'OUT OF STOCK',
      model: 'DFS434',
      category: 'Women',
    },
    {
      id: 4,
      url: require('assets/logo.png'),
      price: '$200',
      title: 'World Balance',
      status: 'OUT OF STOCK',
      model: 'DFS434',
      category: 'Men',
    },
    {
      id: 5,
      url: require('assets/logo2.png'),
      price: '$200',
      title: 'New Balance',
      status: 'OUT OF STOCK',
      model: 'DFS434',
      category: 'Women',
    },
    {
      id: 6,
      url: require('assets/logo1.png'),
      price: '$200',
      title: 'Snicker',
      status: 'OUT OF STOCK',
      model: 'DFS434',
      category: 'Men',
    },
    {
      id: 7,
      url: require('assets/logo.png'),
      price: '$200',
      title: 'Robetson',
      status: 'OUT OF STOCK',
      model: 'DFS434',
      category: 'Women',
    },
  ],
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      limit: 0,
    };
  }
  componentDidMount() {
    // console.log('Got Users collection re');
    this.retrieve(10);
  }

  retrieve = additionalLimit => {
    this.setState({isLoading: true});
    firestore()
      .collection('sneakers')
      .where('lowestPrice', '>', 0)
      .limit(additionalLimit)
      .get()
      .then(querySnapshot => {
        // console.log('Total sneakers: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          this.setState({isLoading: false});
          documentSnapshot.data()['document_id'] = documentSnapshot.id;
          let tempData = this.state.data.concat(documentSnapshot.data());
          this.setState({data: tempData, limit: additionalLimit});
          // console.log('Sneakers:================ ', documentSnapshot.id, documentSnapshot.data());
        });
      });
  };
  onResult(QuerySnapshot) {
    console.log('Got Users collection re');
    // QuerySnapshot.forEach(element => {
    // });
  }
  onError(error) {
    console.error(error);
  }

  render() {
    const {data, isLoading, limit} = this.state;
    return (
      <SafeAreaView>
        <SubHeader navigation={this.props.navigation} index={0} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          // ref={scrollRef}
          onScroll={event => {
            let scrollingHeight =
              event.nativeEvent.layoutMeasurement.height +
              event.nativeEvent.contentOffset.y;
            let totalHeight = event.nativeEvent.contentSize.height;
            if (event.nativeEvent.contentOffset.y >= height) {
              if (isLoading == false) {
                this.retrieve(limit + 10);
              }
            }
          }}
          scrollEventThrottle={16}>
          <View>
            <View
              style={{
                minHeight: height,
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                paddingTop: 50,
              }}>
              {data.map((el, index) => {
                return (
                  <Card
                    item={el}
                    key={index}
                    page={'homepage'}
                    route={'detailsStack'}
                    navigation={this.props.navigation}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
        {this.state.isLoading === true && <Spinner mode="overlay" />}
        <Footer navigation={this.props.navigation} index={1} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
