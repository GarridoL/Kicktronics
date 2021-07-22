import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Style from '../Style.js';
import {connect} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {Spinner} from 'components';
import {Routes, Color, Helper, BasicStyles} from 'common';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Modal from 'react-native-modal';
import {faMobile, faShieldAlt} from '@fortawesome/free-solid-svg-icons';
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
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: ['1'],
      details: null,
      showModal: false,
      user: null
    };
  }

  componentDidMount() {
    const {data} = this.props.navigation.state.params;
    const {user} = this.props.state;
    // console.log('<<<<<<<<<<<<<<<', data);
    this.setState({showModal: true});
    firestore()
      .collection('sneakers')
      .doc(data.itemKey)
      .get()
      .then(querySnapshot => {
        this.setState({details: querySnapshot.data()});
      });
    firestore()
      .collection('users')
      .where('customerId', '==', user.customerId)
      .get()
      .then(res => {
        res.forEach(element => {
          this.setState({user: element.data()});
        });
      });
  }

  redirect(route) {
    if (route === 'optionsStack') {
      this.props.navigation.navigate(route);
    }
  }

  renderModal() {
    const {showModal} = this.state;
    return (
      <View style={([Style.centeredView], {width: width})}>
        <Modal animationType="fade" transparent={true} visible={showModal}>
          <View
            style={[
              Style.centeredView,
              {backgroundColor: 'rgba(255, 255, 255, 0.8)'},
            ]}>
            <View style={Style.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  size={30}
                  style={{marginRight: 5}}></FontAwesomeIcon>
                <Text style={{width: 300}}>
                  We guaranteee that these sneakers are 100% authentic
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <FontAwesomeIcon
                  icon={faMobile}
                  size={30}
                  style={{marginRight: 5}}></FontAwesomeIcon>
                <Text style={{width: 300}}>
                  Shipping time takes about 7-10 business days. We need to
                  authenticate the sneakers before them out to you
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <Image
                  source={require('assets/logo.png')}
                  style={{
                    width: '20%',
                    height: 60,
                    resizeMode: 'stretch',
                    marginLeft: -10,
                  }}></Image>
                <Text style={{width: 300}}>
                  No returns are accepted. It's authentic. Guaranteed.
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => this.setState({showModal: false})}
                style={[
                  Style.btnWithShadow,
                  {
                    backgroundColor: '#1aa3ff',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                  },
                ]}>
                <Text style={{color: Color.primary}}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  render() {
    const {sizes, details, user} = this.state;
    const {data} = this.props.navigation.state.params;
    return (
      <View style={{flex: 1}}>
        {this.renderModal()}
        {details !== null ? (
          <SafeAreaView>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              <Image
                source={{uri: details.picture}}
                style={{width: 150, height: 150}}></Image>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>{details.name}</Text>
                <Text>{details.brand}</Text>
                <Text>
                  {details.type} • {data.size} • {data.cond} • {data.box}
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingLeft: '8%',
                paddingRight: '8%',
                marginTop: height - 550,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: '3%',
                }}>
                <Text>Your Total</Text>
                <TouchableOpacity>
                  <Text>${data.price}(Shipping not included)</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: '3%',
                }}>
                <Text>Ship to</Text>
                {
                  user && user.shipping_country_code === undefined ? (
                <TouchableOpacity onPress={() => this.redirect('optionsStack')}>
                  <Text style={{color: '#1aa3ff'}}>Add address</Text>
                </TouchableOpacity>
                  ): (
                    <Text>{user.shipping_first_name} {user.shipping_last_name}</Text>
                  )
                }
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: '5%',
                }}>
                <Text>Paypal</Text>
                <TouchableOpacity>
                  <Text style={{color: '#1aa3ff'}}>Add PayPal</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  marginBottom: 20,
                }}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  style={[
                    Style.btnWithShadow,
                    {
                      backgroundColor: '#1aa3ff',
                      marginRight: 'auto',
                      marginLeft: 'auto',
                    },
                  ]}>
                  <Text style={{color: Color.primary}}>Purchase</Text>
                </TouchableOpacity>
                <Text>Or</Text>
                <TouchableOpacity style={{marginTop: 10}}>
                  <Text style={{color: '#1aa3ff'}}>
                    Checkout with Credit Card via Paypal
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        ) : (
          <Spinner mode="overlay" />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {
    updateUser: user => dispatch(actions.updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
