import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';

export default function PlayPause (props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="red"
      hitSlop={{
        top: 5,
        left: 5,
        bottom: 5,
        right: 5,
      }}
    >
      {props.paused
        ? <Text style={styles.txt}>PLAY</Text>
        : <Text style={styles.txt}>PAUSE</Text>}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create ({
  txt: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000000',
    backgroundColor: 'gray',
  },
});
