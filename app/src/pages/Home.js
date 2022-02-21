import React from 'react';
import { ImageBackground, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import {
  Dimensions,
  Image,
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
} from 'react-native';
import { Card, Divider, ListItem, SearchBar } from 'react-native-elements';
import { Home as styles } from '../../../styles/Style';

const screen = Dimensions.get('screen');

export default Home = ({ navigation }) => {

  const banner = require('../../assets/home/home_banner.jpeg');

  const newsList = [
    {
      title: '华为大众“牵手”疑云：合资生',
      content: '据媒体2月17日报道，大众汽车集团计划以数。',
    },
    {
      title: '华为大众“牵手”疑云：合资生',
      content: '据媒体2月17日报道，大众汽车集团计划以数。',
    },
    {
      title: '华为大众“牵手”疑云：合资生',
      content: '据媒体2月17日报道，大众汽车集团计划以数。',
    },
  ];

  const vaccineList = [
    {
      title: '科兴',
      img: require('../../assets/home/vaccines.jpg'),
    },
    {
      title: '科兴',
      img: require('../../assets/home/vaccines.jpg'),
    },
    {
      title: '科兴',
      img: require('../../assets/home/vaccines.jpg'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>

      <Image
        style={styles.banner}
        source={banner}
      />

      <View style={styles.newsBlock}>
        <View style={styles.newsHeader}>
          <Text style={{color: 'black'}}>最新资讯</Text>
          <TouchableOpacity>
            <Image style={styles.more} source={require('../../assets/home/arrow.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.newsItemList}>
          {newsList.map((news, index) => {
            return (
              // TODO：页面跳转时将对应的id传到下一个页面
              <TouchableOpacity key={index} style={styles.newsItem}>
                <Text style={styles.newsTitle}>{news.title}</Text>
                <Text style={styles.newsContent}>{news.content}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.vaccineBlock}>
        <View style={styles.vaccineHeader}>
          <Text style={{color: 'black'}}>疫苗列表</Text>
        </View>
        {vaccineList.map((vaccine, index) => {
          return (
            // TODO：页面跳转时将对应的id传到下一个页面
            <TouchableOpacity key={index} onPress={() => { navigation.navigate('VaccineInfo') }}>
              <ImageBackground style={styles.vaccinesImg} imageStyle={{ borderRadius: 20 }} source={vaccine.img}>
                <Text style={styles.vaccinesName}>{vaccine.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </View>

    </ScrollView>

  );
};
