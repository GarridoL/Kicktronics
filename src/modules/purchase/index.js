import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}>
          <SearchBar
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={this.state.search}
          containerStyle={{backgroundColor: 'gray', borderWidth: 0, borderBottomColor: 'white'}}
          inputContainerStyle={{backgroundColor: 'white', borderRadius: 15}}
          searchIcon={() => <FontAwesomeIcon icon={faSearch} color={'gray'}></FontAwesomeIcon>}
        />
      </ScrollView>
    );
  }
}

export default Purchase;
