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
    Dimensions
  } from 'react-native';
import Style from './Style.js'
import { connect } from 'react-redux'
import { Routes, Color, Helper, BasicStyles } from 'common';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

  class LandingPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render(){
        return(
          <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={{
            height: height,
            flex: 1,
            backgroundColor: '#F5F5F5'
          }}>
              <View style={{
                height: '50%',
                width: width,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 100}}>
              <Image source={require('assets/logo.png')} style={{width: '50%', height: '50%'}}/>
              <Text style={{fontSize: 18}}>Kicktronics</Text>
              </View>
  
  
              <View style={{
                width: '100%',
                alignItems: 'center'
              }}>
  
                <TouchableOpacity style={[Style.btnWithShadow]} onPress={() => this.props.navigation.navigate('registerStack')}>
                  <Text style={{fontWeight: 'bold'}}>SIGN UP</Text>
                </TouchableOpacity>
              </View>

              <View style={{
                width: '100%',
                alignItems: 'center'
              }}>
  
                <TouchableOpacity style={[Style.btnWithShadow, {backgroundColor: Color.secondary}]} onPress={() => this.props.navigation.navigate('homePageStack')}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>START BROWSING</Text>
                </TouchableOpacity>
              </View>
  
  
              <View style={{
                width: '100%',
                alignItems: 'center',
                position: 'absolute',
                bottom: 40
              }}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('loginStack')}>
                  <Text style={{
                    fontSize: BasicStyles.standardFontSize
                  }}>Already have an account?
                      <Text
                        style={{
                          textDecorationLine:'underline',
                          fontWeight:'bold'
                        }}>
                          Sign In
                      </Text>
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
        </ScrollView>
        )
    }
  }

export default LandingPage;