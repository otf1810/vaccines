import React from 'react';
import { ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import {
  Card,
  Divider,
  Header,
  ListItem,
  SearchBar,
  Image,
  Avatar,
  Icon,
} from 'react-native-elements';
import { t } from 'react-native-tailwindcss';

const screen = Dimensions.get('screen');

export default Home = ({ navigation }) => {
  const banner = require('@assets/home/home_banner.jpeg');

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
      id: 1,
      title: '北京科兴',
      img: require('@assets/home/vaccines.jpg'),
    },
    {
      id: 2,
      title: '成都生物',
      img: require('@assets/home/vaccines.jpg'),
    },
    {
      id: 3,
      title: '武汉生物',
      img: require('@assets/home/vaccines.jpg'),
    },
  ];

  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" /> */}
      <Header
        elevated
        backgroundColor='#4169E1'
        backgroundImageStyle={{}}
        barStyle='light-content'
        centerComponent={{
          text: '首页',
          style: { color: '#fff' },
        }}
        centerContainerStyle={{}}
        leftComponent={{ icon: 'menu', color: '#fff' }}
        leftContainerStyle={{}}
        placement='center'
        statusBarProps={{}}
      />

      <ScrollView
        contentContainerStyle={[t.itemsCenter]}
        showsVerticalScrollIndicator={false}>
        <Image
          style={[
            { width: 370, height: screen.height / 5 },
            t.roundedLg,
            t.mT5,
            t.mB4,
          ]}
          source={banner}
        />

        {newsList.map((news, index) => {
          return (
            <ListItem bottomDivider style={{ width: 370 }}>
              <ListItem.Content>
                <ListItem.Title>{news.title}</ListItem.Title>
                <ListItem.Subtitle>{news.content}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}

        {vaccineList.map((vaccine, index) => {
          return (
            <Card key={index} containerStyle={{ width: 370 }} wrapperStyle={{}}>
              <Card.Title>{vaccine.title}</Card.Title>
              <Card.Divider />
              <Image
                source={vaccine.img}
                style={{ width: '100%', height: 150 }}
                onPress={() => {
                  navigation.navigate('VaccineInfo', { vaccineId: vaccine.id });
                }}
              />
            </Card>
          );
        })}
      </ScrollView>
    </>
  );
};
