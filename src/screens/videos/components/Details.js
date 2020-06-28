import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function Details (props) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{props.title} </Text>
      </View>
      <View style={styles.botton}>
        <Image style={styles.cover} source={{uri: props.medium_cover_image}} />
        <ScrollView>
          <Text style={styles.description}>{props.description_full} </Text>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create ({
  container: {},
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botton: {
    flexDirection: 'row',
    padding: 20,
  },
  cover: {
    width: 125,
    height: 190,
  },
  description: {
    color: '#4c4c4c',
    fontSize: 15,
    lineHeight: 22.5,
    marginLeft: 10,
  },
  trailer: {
    height: 200,
  },
});
