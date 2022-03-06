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
import { t } from 'react-native-tailwindcss';

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
    <ScrollView contentContainerStyle={[t.itemsCenter]} showsVerticalScrollIndicator={false}>

      <Image
        style={[{ width: 370, height: screen.height / 5 }, t.roundedLg, t.mT5, t.mB4]}
        source={banner}
      />

      <View style={[{width: 370}, t.itemsCenter, t.bgWhite, t.roundedLg, t.mB4]}>
        <View style={[{ width: 370 }, t.flexRow, t.justifyBetween, t.itemsCenter, t.pX5, t.pT3]}>
          <Text style={[t.textBlack]}>最新资讯</Text>
          <TouchableOpacity>
            <Image style={[t.h5, t.w5]} source={require('../../assets/home/more.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={[{ width: 370 }, t.textBlack, t.justifyCenter, t.itemsCenter]}>
          {newsList.map((news, index) => {
            return (
              // TODO：页面跳转时将对应的id传到下一个页面
              <>
              <TouchableOpacity key={index} style={[{ width: 345 }, t.bgWhite, t.roundedLg, t.p2]}>
                <Text style={[t.textBlack, t.textBase, t.fontBold, { lineHeight: 28 }]}>{news.title}</Text>
                <Text style={[t.textBlack, t.textSm, { lineHeight: 24 }]}>{news.content}</Text>
              </TouchableOpacity>
              {index == newsList.length - 1 ? null : <View style={[{width: 370}, t.border2, t.borderGray100]}></View>}
              
              </>
            );
          })}
        </View>
      </View>

      <View style={[{ width: 370 }, t.itemsCenter, t.bgWhite, t.roundedLg, t.mB4]}>
        <View style={[{ width: 350 }, t.selfStart, t.pY4, t.mL3]}>
          <Text style={[t.textBlack]}>疫苗列表</Text>
        </View>
        {vaccineList.map((vaccine, index) => {
          return (
            // TODO：页面跳转时将对应的id传到下一个页面
            <TouchableOpacity key={index} onPress={() => { navigation.navigate('VaccineInfo') }}>
              <ImageBackground style={[{ width: 350, height: screen.height / 5 }, t.mB6]} imageStyle={[t.roundedLg]} source={vaccine.img}>
                <Text style={[t.textWhite, t.text2xl, t.m2]}>{vaccine.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </View>

    </ScrollView>

  );
};
