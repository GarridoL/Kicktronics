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
import firestore from '@react-native-firebase/firestore';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

let sizes = [
  {sizes: 4, price: '$200', details: 'ORIGINAL BOX'},
  {sizes: 4.5, price: '$250', details: 'ORIGINAL BOX'},
  {sizes: 5, price: '$270', details: 'ORIGINAL BOX'},
  {sizes: 5.5, price: '$300', details: 'ORIGINAL BOX'},
  {sizes: 6, price: '$350', details: 'ORIGINAL BOX'},
  {sizes: 6.5, price: '$400', details: 'ORIGINAL BOX'},
  {sizes: 8, price: '$500', details: 'ORIGINAL BOX'},
  {sizes: 8.5, price: '$550', details: 'ORIGINAL BOX'},
  {sizes: 10, price: '$700', details: 'ORIGINAL BOX'},
  {sizes: 10.5, price: '$760', details: 'ORIGINAL BOX'},
];
class Sizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfIssues: 0,
      noOfSpBox: 0,
    };
  }

  redirect(item) {
    const {type, picture, itemKey} = this.props.navigation.state.params;
    // const { setSelectedProduct } = this.props;
    item['type'] = type;
    item['picture'] = picture;
    console.log('^^^^^^^^^^^^^^^^^^^', this.props);
    this.props.setSelectedProduct(item);
    this.props.navigation.navigate('checkoutStack', {
      data: item,
    });
  }

  componentDidMount() {
    const {itemKey, data} = this.props.navigation.state.params;
    firestore()
      .collection('issues')
      .where('itemKey', '==', itemKey)
      .get()
      .then(querySnapshot => {
        this.setState({noOfIssues: querySnapshot.size});
      });
    
    let tempData = data.filter(el => {
      return el.box === 'Special Box'
    })
    this.setState({noOfSpBox: tempData.length <= 0 ? 0 : tempData.length})
  }

  render() {
    const {routeName, data, type, picture} = this.props.navigation.state.params;
    const {noOfIssues, noOfSpBox} = this.state;
    console.log('>>>>>>>>>', picture);
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginBottom: 20,
              marginTop: 20,
              marginRight: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 50,
                paddingRight: 50,
              }}>
              <Image
                source={{uri: picture}}
                style={{height: 60, width: 60, resizeMode: 'stretch'}}></Image>
              <Text style={{textAlign: 'right'}}>US {type}'s size</Text>
            </View>
          </View>
          <View style={{height: height, paddingRight: 10, paddingLeft: 10}}>
            {routeName === 'sizes' &&
              data.map(el => {
                return (
                  <TouchableOpacity onPress={() => this.redirect(el)}>
                    {el.box !== undefined && (
                      <View style={[Style.cardStyleWithShadow]}>
                        <View
                          style={{
                            flexDirection: 'row',
                            paddingBottom: 10,
                            paddingTop: 10,
                          }}>
                          <View
                            style={{
                              flex: 13,
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}>
                            <Text style={{fontWeight: 'bold', color: 'gray'}}>
                              {el?.size}
                            </Text>
                          </View>
                          <View
                            style={{
                              flex: 13,
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}>
                            <Text>{el?.box}</Text>
                          </View>
                          <View
                            style={{
                              flex: 13,
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}>
                            <Text style={{fontWeight: 'bold', color: 'gray'}}>
                              US${el.price}
                            </Text>
                          </View>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
        <View
          style={[
            Style.btnWithShadow,
            {position: 'absolute', bottom: -20, width: '100%'},
          ]}>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={{color: Color.primary}}>{noOfIssues} new with issues</Text>
            <Text style={{color: Color.primary}}>{noOfSpBox} new with special box</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
    const { actions } = require('@redux');
    return {
      setSelectedProduct: (selectedProduct) => dispatch(actions.setSelectedProduct(selectedProduct)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sizes);
