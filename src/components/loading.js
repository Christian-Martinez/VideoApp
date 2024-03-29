import React from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';

export default function Loading (props) {
  return (
    <View style={styles.container}>
      <Image source={require ('../../assets/cruze.jpg')} style={styles.logo} />
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create ({
  logo: {
    width: 700,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
