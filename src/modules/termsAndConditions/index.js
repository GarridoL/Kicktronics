import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Dimensions, Modal, Alert } from 'react-native';
import { Routes, Color, Helper, BasicStyles } from 'common';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);


class TermsAndConditions extends Component {

  redirect = (item) => {
    this.props.navigation.navigate('termsStack', {data: item});
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={{
            paddingLeft: 15
          }}>
            {Helper.termsAndConditions.map((item, index) => (
              <TouchableOpacity style={{
                paddingTop: 20,
                paddingBottom: 20,
                borderBottomColor: Color.gray,
                borderBottomWidth: .3,
                flexDirection: 'row'
              }}
              onPress={() => {
                this.redirect(item)
              }}
              >
                <Text style={{
                  color: item.color ? item.color : 'black',
                  fontSize: 12
                }}>{item.title}</Text>
                {item.arrowRight && <FontAwesomeIcon 
                  icon={faChevronRight} 
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: 15,
                    color: Color.gray
                  }}
                  size={15}></FontAwesomeIcon>}
              </TouchableOpacity>
            ))}
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
)(TermsAndConditions);