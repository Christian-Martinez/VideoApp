import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';

export default function Header (props) {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require ('../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.right}>
            {props.children}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create ({
  logo: {
    width: 70,
    height: 35,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
