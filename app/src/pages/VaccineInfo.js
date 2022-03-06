import React from 'react';
import { ImageBackground, Text, Image, View, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from 'react-native-scrollable-tab-view/DefaultTabBar';
import { t } from 'react-native-tailwindcss';

const screen = Dimensions.get('screen');

export default VaccineInfo = ({ navigation }) => {
  return (
    <>
    <ImageBackground source={require('../../assets/vaccineInfo/vaccines.jpg')} style={{width: screen.width, height: screen.height / 3}}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={require('../../assets/vaccineInfo/goBack.png')} style={[t.h6, t.w6, t.m5]} />
        </TouchableOpacity>
      </ImageBackground>

      <ScrollableTabView style={[t.bgWhite]} renderTabBar={() => <DefaultTabBar />} tabBarActiveTextColor={'blue'} >
        <View tabLabel='简介' style={[t.p5, t.bgWhite]}>
          <Text style={[t.textLg, t.fontBold, t.mB3]}>克尔来福</Text>
          <Text style={[t.textBase, t.mB1]}>上市日期：2021年2月5日</Text>
          <Text style={[t.textBase]}>2021年12月12日消息，我国多个机构和单位部门在《柳叶刀-感染病学》上发表了一篇研究报告，主要是关于健康成年人接种两剂 SINOVAC 科兴新冠病毒灭活疫苗克尔来福的免疫持久性，第三剂接种后免疫原性临床研究结果。研究表明：接种第三剂疫苗后抗体水平显著升高，并显示出良好的安全性。</Text>
        </View>
        <View tabLabel='评论'>
          <View style={[t.flexRow, t.p5]}>
            <Avatar size={64} rounded source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }} />
            <View style={[t.justifyEvenly, t.mL2]}>
              <Text style={[t.textLg, t.fontBold]}>Eric Gordon</Text>
              <Text>This is a perfect game!</Text>
            </View>
          </View>
        </View>
      </ScrollableTabView>

      <Button title='立即预约' onPress={() => navigation.navigate('Order')} />

    </>
  )
}