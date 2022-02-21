import React from 'react';
import { ImageBackground, Text, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from 'react-native-scrollable-tab-view/DefaultTabBar';
import { VaccineInfo as styles } from '../../../styles/Style';

export default VaccineInfo = ({ navigation }) => {
  return (
    <>
      <ImageBackground source={require('../../assets/vaccineInfo/vaccines.jpg')} style={styles.vaccineImg}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={require('../../assets/vaccineInfo/goBack.png')} style={styles.goBack} />
        </TouchableOpacity>
      </ImageBackground>

      <ScrollableTabView renderTabBar={() => <DefaultTabBar />} tabBarActiveTextColor={'gray'} style={styles.tab}>
        <View tabLabel='简介' style={styles.intro}>
          <Text style={styles.title}>克尔来福</Text>
          <Text style={styles.date}>上市日期：2021年2月5日</Text>
          <Text style={styles.desc}>2021年12月12日消息，我国多个机构和单位部门在《柳叶刀-感染病学》上发表了一篇研究报告，主要是关于健康成年人接种两剂 SINOVAC 科兴新冠病毒灭活疫苗克尔来福的免疫持久性，第三剂接种后免疫原性临床研究结果。研究表明：接种第三剂疫苗后抗体水平显著升高，并显示出良好的安全性。</Text>
        </View>
        <Text tabLabel='评论' />
      </ScrollableTabView>

    </>
  )
}