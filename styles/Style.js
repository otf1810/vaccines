import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const screen = Dimensions.get('screen');

const HomeStyle = StyleSheet.create({
  page: {
    alignItems: 'center' 
  },
  banner: {
    width: 360,
    height: screen.height / 5,
    borderRadius: 20,
    marginTop: 20
  },
  newsBlock: {
    height: 260,
    width: 370,
    // borderWidth: 1,
    alignItems: 'center'
  },
  newsHeader: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignSelf: 'stretch',
    // padding: 15,
    paddingVertical: 15,
    // borderWidth: 1
  },
  more: {
    width: 25,
    height: 25,
  },
  newsItemList: {
    width: 350,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsItem: {
    // height: 75,
    width: 345,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: 5,
    padding: 8,
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsContent: {
    fontSize: 14,
  }
  
});

export {
  HomeStyle
};