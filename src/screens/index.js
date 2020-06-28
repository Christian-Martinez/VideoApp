import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import Movie from './movie/Movie'
import CategoryList from './videos/CategoryList';
import SuggestionList from './videos/SuggestionList';
import Header from 'VideoApp/src/components/Header';

class index extends Component {
  render () {
    if (this.props.selectedMovie) {
      return <Movie/>
    }
    return (
      <View style={{flex: 1}}>
        <Header>
          <Text>Header</Text>
        </Header>
        <CategoryList />
        <SuggestionList />
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    selectedMovie: state.videos.selectedMovie,
  };
}

export default connect (mapStateToProps) (index);
