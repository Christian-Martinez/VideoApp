import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Layout (props) {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {props.video}
      </View>
      <View style={styles.overlay}>
        {props.loading && props.loader}
      </View>
      {props.controls}
    </View>
  );
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
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
