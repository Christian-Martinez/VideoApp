import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import Player from '../player';
import Close from './components/Close';
import Header from 'VideoApp/src/components/Header';
import Details from '../videos/components/Details';

class Movie extends Component {
  closeVideo = () => {
    this.props.dispatch ({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      },
    });
  };

  render () {
    //TODO no realiza scrooll por el player
    return (
      <View>
        <Header>
          <Close onPress={this.closeVideo} />
        </Header>
        <Player />
        <Details {...this.props.movie} />
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    movie: state.videos.selectedMovie,
  };
}

export default connect (mapStateToProps) (Movie);
