import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const screen = Dimensions.get('screen');

const Home = StyleSheet.create({
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
    // height: 260,
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
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 28
  },
  newsContent: {
    color: 'black',
    fontSize: 14,
    lineHeight: 24
  },
  vaccineBlock: {
    width: 370,
    alignItems: 'center'
  },
  vaccineHeader: {
    width: 350,
    alignSelf: 'flex-start',
    paddingVertical: 15,
    marginLeft: 10.5
  },
  vaccinesImg: {
    width: 350,
    height: screen.height / 5,
    marginBottom: 20
  },
  vaccinesName: {
    color: 'white',
    fontSize: 24,
    margin: 10
  }
  
});

const VaccineInfo = StyleSheet.create({
  vaccineImg: {
    width: screen.width,
    height: screen.height / 3,
    // marginBottom: 20
  },
  goBack: {
    height: 25,
    width: 25,
    margin: 20
  },
  intro: {
    // width: 370,
    // marginLeft: 20
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    marginBottom: 10
  },
  date: {
    fontSize: 20,
    fontWeight: '300',
    lineHeight: 24,
    marginBottom: 10
  },
  desc: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    
  }
});

const tabBar = StyleSheet.create({

});

export {
  Home,
  VaccineInfo,
  tabBar
};