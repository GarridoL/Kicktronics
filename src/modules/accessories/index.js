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
import firestore from '@react-native-firebase/firestore';
import {Spinner} from 'components';
import {SafeAreaView} from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Accessories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
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
      .collection('accBackup')
      .limit(additionalLimit)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          this.setState({isLoading: false});
          let tempData = this.state.data.concat(documentSnapshot.data());
          this.setState({data: tempData, limit: additionalLimit});
          // console.log('Sneakers:================ ', documentSnapshot.id, documentSnapshot.data());
        });
      });
  };

  render() {
    const {data, isLoading, limit} = this.state;
    return (
      <SafeAreaView style={{backgroundColor: '#F5F5F5'}}>
        <SubHeader navigation={this.props.navigation} index={3} />
        <ScrollView
          showsVerticalScrollIndicator={false}
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
              {data.map(el => {
                return (
                  <Card
                    item={el}
                    page={'accessories'}
                    route={'detailsStack'}
                    navigation={this.props.navigation}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
        {isLoading === true && <Spinner mode="overlay" />}
        <Footer navigation={this.props.navigation} index={1} />
      </SafeAreaView>
    );
  }
}
export default Accessories;
