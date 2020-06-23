import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import Video from 'react-native-video';

import Layout from './components/layout';
import PlayPause from './components/PlayPause';

export default class Player extends Component {
  state = {
    loading: true,
    paused: false,
  };

  onBuffer = ({isBuffering}) => {
    console.log ('isBuffering', isBuffering);
    this.setState ({
      loading: isBuffering,
    });
  };

  playPause = () => {
    this.setState ({
      paused: !this.state.paused,
    });
  };

  render () {
    return (
      <Layout
        //loading={this.state.loading}
        video={
          <Video
            source={{
              uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
            }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            paused={this.state.paused}
          />
        }
        loader={<ActivityIndicator color="white" />}
        controls={
          <View style={styles.containerControl}>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    paddingTop: '56.25%', //por regla de 3 simple y ...
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  containerControl: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
    alignItems: 'center',
  },
});
