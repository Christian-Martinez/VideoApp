import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';

export default function Category (props) {
  return (
    <ImageBackground
      source={{uri: props.background_image}}
      style={styles.wrapper}
    >
      <Text style={styles.genre}>{props.genres[0]}</Text>
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create ({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    //sombras para ios
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
  },
});
