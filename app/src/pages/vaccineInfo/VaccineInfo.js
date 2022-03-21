import React from 'react';
import { ImageBackground, Image, View, Dimensions } from 'react-native';
import { Header, Text, Button } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from 'react-native-scrollable-tab-view/DefaultTabBar';
import { t } from 'react-native-tailwindcss';
// import Icon from 'react-native-vector-icons/Ionicons';

const screen = Dimensions.get('screen');

const data = {
  name: '克尔来福',
  prod_date: '2021年2月5日',
  prod_factory: '北京科兴',
  desc: '2021年12月12日消息，我国多个机构和单位部门在《柳叶刀-感染病学》上发表了一篇研究报告，主要是关于健康成年人接种两剂 SINOVAC 科兴新冠病毒灭活疫苗克尔来福的免疫持久性，第三剂接种后免疫原性临床研究结果。研究表明：接种第三剂疫苗后抗体水平显著升高，并显示出良好的安全性。',
  photo: require('@assets/vaccineInfo/vaccines.jpg'),
};

export default VaccineInfo = ({ route, navigation }) => {
  const { vaccineId } = route.params;

  return (
    <>
      <Header
        // elevated
        backgroundColor='#4169E1'
        backgroundImageStyle={{}}
        barStyle='light-content'
        centerComponent={{
          text: '疫苗信息',
          style: { color: '#fff' },
        }}
        centerContainerStyle={{}}
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => {
            navigation.goBack();
          },
        }}
        leftContainerStyle={{}}
        placement='center'
        statusBarProps={{}}
      />
      <ImageBackground
        source={data.photo}
        style={{ width: screen.width, height: screen.height / 3 }}
      />

      <ScrollableTabView
        style={[t.bgWhite]}
        renderTabBar={() => <DefaultTabBar />}
        tabBarActiveTextColor={'#4169E1'}
        tabBarUnderlineStyle={{ backgroundColor: '#4169E1' }}>
        <View tabLabel='简介' style={[t.p5, t.bgWhite]}>
          <Text style={[t.textLg, t.fontBold, t.mB3]}>{data.name}</Text>
          <Text style={[t.textBase, t.mB1]}>上市日期：{data.prod_date}</Text>
          <Text style={[t.textBase, t.mB1]}>生产厂家：{data.prod_factory}</Text>
          <Text style={[t.textBase]}>{data.desc}</Text>
          <Button
            title='立即预约'
            buttonStyle={{
              backgroundColor: '#4169E1',
              borderRadius: 3,
            }}
            containerStyle={{
              width: 361,
              marginLeft: -3,
              marginTop: 81,
              // marginHorizontal: 50,
              // marginVertical: 10,
            }}
            onPress={() =>
              navigation.navigate('Order', { vaccineId: vaccineId })
            }
          />
        </View>
        <View tabLabel='评论'>
          <View style={[t.flexRow, t.p5]}>
            <Avatar
              size={64}
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            />
            <View style={[t.justifyEvenly, t.mL2]}>
              <Text style={[t.textLg, t.fontBold]}>Eric Gordon</Text>
              <Text>This is a perfect game!</Text>
            </View>
          </View>
        </View>
      </ScrollableTabView>

      {/* <Button title='立即预约' onPress={() => navigation.navigate('Order', { vaccineId: vaccineId })} /> */}
    </>
  );
};
