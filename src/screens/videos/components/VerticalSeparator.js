import React from 'react';
import {View} from 'react-native';

export default function VerticalSeparator (props) {
  return (
    <View
      style={{
        paddingHorizontal: 5,
        borderTopWidth: 1,
        borderTopColor: props.color ? props.color : '#000',
      }}
    />
  );
}
