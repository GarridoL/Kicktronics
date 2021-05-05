import React, {Component} from 'react';
import Style from './Style.js';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import {Routes, Color, Helper, BasicStyles} from 'common';
import {connect} from 'react-redux';
import {Dimensions} from 'react-native';
import { Pager, PagerProvider } from '@crowdlinker/react-native-pager';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const transactionData = []

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }


  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    return true
  };

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Text>Welcome</>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
});
const mapStateToProps = (state) => ({state: state});

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('@redux');
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
