import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const screen = Dimensions.get('screen');

const HomeStyle = StyleSheet.create({
  banner: {
    width: screen.width,
    height: screen.height / 5,
  },
  newsHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 10,
  }
});

export {
  HomeStyle
};