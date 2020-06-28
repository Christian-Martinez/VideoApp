import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Close (props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text> Close </Text>
    </TouchableOpacity>
  );
}
