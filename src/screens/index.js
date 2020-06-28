import React, {Component} from 'react';
import {Text} from 'react-native';

import Player from './player';
import CategoryList from './videos/CategoryList';
import SuggestionList from './videos/SuggestionList';
import Header from 'VideoApp/src/components/Header';

class index extends Component {

  render () {
    return (
      <>
        <Header>
          <Text>Header</Text>
        </Header>
        <Player />
        <CategoryList />
        <SuggestionList />
      </>
    );
  }
}

export default index;
