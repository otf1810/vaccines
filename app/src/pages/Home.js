import React from 'react';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
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
import { HomeStyle as styles } from '../../../styles/Style';

const screen = Dimensions.get('screen');

export default Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>

      <Image
        style={styles.banner}
        source={require('../../assets/home/home_banner.jpeg')}
      />

      {/* <Text style={styles.newsHeader}>最新资讯</Text>
        <ListItem
          Component={TouchableHighlight}
          containerStyle={{borderRadius: 0.5}}
          disabledStyle={{ opacity: 0.5 }}
          onLongPress={() => console.log('onLongPress()')}
          onPress={() => console.log('onLongPress()')}
          pad={20}
          bottomDivider
          topDivider>
          <ListItem.Content>
            <ListItem.Title>
              <Text>第四金!速度滑冰男子500米</Text>
            </ListItem.Title>
          </ListItem.Content>
          <Text>{'>'}</Text>
        </ListItem> */}

      <View style={styles.newsBlock}>
        <View style={styles.newsHeader}>
          <Text>最新资讯</Text>
          <TouchableOpacity>
            <Image style={styles.more} source={require('../../assets/home/arrow.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.newsItemList}>
          <TouchableOpacity style={styles.newsItem}>
            <Text style={styles.newsTitle}>华为大众“牵手”疑云：合资生</Text>
            <Text style={styles.newsContent}>据媒体2月17日报道，大众汽车集团计划以数。</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsItem}>
            <Text style={styles.newsTitle}>华为大众“牵手”疑云：合资生</Text>
            <Text style={styles.newsContent}>据媒体2月17日报道，大众汽车集团计划以数。</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newsItem}>
            <Text style={styles.newsTitle}>华为大众“牵手”疑云：合资生</Text>
            <Text style={styles.newsContent}>据媒体2月17日报道，大众汽车集团计划以数。</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/* <TouchableOpacity>
          <Card containerStyle={{borderRadius: 0.8}} wrapperStyle={{borderRadius:0.8}}>
            <Card.Title>布偶猫</Card.Title>
            <Card.Image
              source={require('../../assets/cat.jpg')}
            />
          </Card>
        </TouchableOpacity> */}

    </ScrollView>

  );
};
