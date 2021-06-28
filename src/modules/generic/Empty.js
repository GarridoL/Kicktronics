import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions} from 'react-native';
import { Color } from 'common';
import { connect } from 'react-redux';
const width = Math.round(Dimensions.get('window').width);

class Empty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null
    }
  }
  // <Empty navigation={this.props.navigation}></Empty>

  render() {
    const { index } = this.props
    return (
      <View style={{
        alignItems: 'center', width: width, backgroundColor: 'white', zIndex: 1000,
          paddingTop: '50%'
      }}>
        <Text style={{color: 'gray'}}>Please login/signup to continue</Text>
        <TouchableOpacity
          style={{
            shadowColor: Color.black,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.23, // 0.23
            shadowRadius: 10, // 2.62
            elevation: 5,
            backgroundColor: Color.white,
            borderColor: 'gray',
            borderWidth: 1,
            height: 40,
            width: width - 250,
            marginTop: 20,
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5
          }}
          onPress={() => this.props.navigation.navigate('loginStack')}>
          <Text style={{
            color: 'black',
            fontWeight: 'bold'
            }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ 
            
            shadowColor: Color.black,
            shadowOffset: {
              width: 0,
              height: 15,
            },
            shadowOpacity: 0.23, // 0.23
            shadowRadius: 10, // 2.62
            elevation: 10,
            backgroundColor: Color.white,
            borderColor: 'gray',
            borderWidth: 1,
            height: 40,
            width: width - 250,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5
          }}
          onPress={() => this.props.navigation.navigate('registerStack')}>
          <Text style={{
            color: 'black', 
            fontWeight: 'bold'
            }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
    const { actions } = require('@redux');
    return {
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Empty);