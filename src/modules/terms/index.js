import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Dimensions, Modal, Alert } from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);


class Terms extends Component {

  redirect = () => {
    console.log(this.props.navigation.navigate, 'hey');
    this.props.navigation.navigate('termsStack');
  }

  render() {
    const { data } = this.props.navigation?.state?.params
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={{
          padding: 20
        }}>
          <Text style={{
            fontWeight: 'bold'
          }}>{data.title}</Text>
          <Text style={{
            marginTop: 35,
            textAlign: 'justify',
            paddingRight: 15
          }}>&emsp;&emsp;&emsp;{data.description}</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    setModalOptions: (show) => { dispatch(actions.setModalOptions(show)) }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Terms);