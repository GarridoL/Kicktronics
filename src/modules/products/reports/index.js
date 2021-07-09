import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Style from './Style.js';
import {connect} from 'react-redux';
import {Routes, Color, Helper, BasicStyles} from 'common';
import SubHeader from 'modules/generic/SubHeader.js';
import Footer from 'modules/generic/Footer.js';
import Card from 'modules/generic/Card.js';
import {DateTime, Spinner} from 'components';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const issues = [
  {
    id: 1,
    title: 'Name',
    backgroundColor: 'white',
  },
  {
    id: 2,
    title: 'Box ID',
    backgroundColor: 'white',
  },
  {
    id: 3,
    title: 'Gender Type',
    backgroundColor: 'white',
  },
  {
    id: 4,
    title: 'Color',
    backgroundColor: 'white',
  },
  {
    id: 5,
    title: 'Main Picture',
    backgroundColor: 'white',
  },
  {
    id: 6,
    title: 'Additional Picture',
    backgroundColor: 'white',
  },
];

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      isLoading: false,
      backgroundColor: '',
      selectedIssues: [],
      listIssues: issues,
    };
  }

  componentDidMount() {}

  validate() {
    if (this.state.selectedIssues.length <= 0) {
      Alert.alert('Error Message', 'No selected Issue', [{text: 'OK'}], {
        cancelable: false,
      });
      return false;
    } else {
      return true;
    }
  }

  async submitReport() {
    const {itemKey} = this.props.navigation.state.params;
    const token = await AsyncStorage.getItem(Helper.APP_NAME + 'uid');
    if (this.validate() === false) {
      return;
    }
    let params = {
      issues: this.state.selectedIssues,
      itemKey: itemKey,
      itemId: itemKey,
      uid: token,
      ts: new Date().getTime(),
    };
    console.log('??????????', params);
    this.setState({isLoading: true});
    firestore()
      .collection('issues')
      .add(params)
      .then(() => {
        this.setState({selectedIssues: [], isLoading: false})
        this.props.navigation.pop();
      });
  }

  async selectIssue(selected) {
    await issues.map(item => {
      if (item.id === selected.id) {
        if (item.backgroundColor === 'white') {
          item.backgroundColor = 'black';
          let tempSelected = this.state.selectedIssues.concat(selected.title);
          this.setState({selectedIssues: tempSelected});
        } else {
          item.backgroundColor = 'white';
          let removeIssue = this.state.selectedIssues.filter(
            el => el !== selected.title,
          );
          this.setState({selectedIssues: removeIssue});
        }
      }
      return item;
    });
    this.setState({listIssues: issues});
  }

  render() {
    const {page, isLoading, listIssues} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: Color.gray}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>Report Issues</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.submitReport()}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          {listIssues.map(item => (
            <TouchableOpacity onPress={() => this.selectIssue(item)}>
              <View
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 5,
                  backgroundColor: item.backgroundColor,
                  marginBottom: 5,
                }}>
                <Text
                  style={{
                    color: item.backgroundColor === 'black' ? 'white' : 'black',
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          {isLoading ? <Spinner mode="overlay" /> : null}
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Report);
