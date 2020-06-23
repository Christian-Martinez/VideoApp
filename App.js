import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Header from 'VideoApp/src/components/Header';
import Player from './src/screens/player';
import CategoryList from './src/screens/videos/CategoryList';
import SuggestionList from './src/screens/videos/SuggestionList';

export default class App extends Component {
  render () {
    return (
      <>
        <Header>
          <Text>Header</Text>
        </Header>
        <Player/>
        <CategoryList />
        <SuggestionList />
      </>
    );
  }
}
