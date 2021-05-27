import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  TextInput,
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
import ModalOptions from 'modules/modal/options.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCartPlus, faHeadset} from '@fortawesome/free-solid-svg-icons';
import PasswordWithIcon from 'components/InputField/Password.js';

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      phone: null,
      confirmPassword: null
    };
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params);
  }

  render() {
    const {formType} = this.props.navigation.state.params;
    return (
      <View>
        <View style={[Style.TextContainer]}>
          {formType === 'Username' && (
            <TextInput
              style={{
                ...BasicStyles.standardFormControl,
                marginBottom: 20,
              }}
              autoFocus={true}
              onChangeText={username => this.setState({username})}
              value={this.state.username}
              placeholder={'Username'}
            />
          )}
          {formType === 'Full Name' && (
            <View>
              <TextInput
                style={{
                  ...BasicStyles.standardFormControl,
                  marginBottom: 20,
                }}
                autoFocus={true}
                onChangeText={username => this.setState({username})}
                value={this.state.username}
                placeholder={'First Name'}
              />
              <TextInput
                style={{
                  ...BasicStyles.standardFormControl,
                  marginBottom: 20,
                }}
                autoFocus={true}
                onChangeText={username => this.setState({username})}
                value={this.state.username}
                placeholder={'Last Name'}
              />
            </View>
          )}
          {formType === 'Email' && (
            <TextInput
              style={{
                ...BasicStyles.standardFormControl,
                marginBottom: 20,
              }}
              onChangeText={email => this.setState({email})}
              value={this.state.email}
              placeholder={'Email Address'}
              keyboardType={'email-address'}
            />
          )}
          {formType === 'Phone' && (
            <TextInput
              style={{
                ...BasicStyles.standardFormControl,
                marginBottom: 20,
              }}
              onChangeText={phone => this.setState({phone})}
              value={this.state.phone}
              placeholder={'Phone Number'}
            />
          )}
          {formType === 'Password' && (
            <View>
              <View>
                <PasswordWithIcon
                  onTyping={input =>
                    this.setState({
                      password: input,
                    })
                  }
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                }}>
                <PasswordWithIcon
                  onTyping={input =>
                    this.setState({
                      confirmPassword: input,
                    })
                  }
                  placeholder={'Confirm Password'}
                />
              </View>
            </View>
          )}
          <TouchableOpacity
            style={[
              Style.btnWithShadow,
              {
                backgroundColor: Color.secondary,
                width: width,
                marginLeft: '-5%',
              },
            ]}
            onPress={() => this.props.navigation.navigate('homePageStack')}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ProfileForm;
