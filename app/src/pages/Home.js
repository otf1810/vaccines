import React from 'react';
import {TouchableHighlight} from 'react-native';
import {
  Dimensions,
  Image,
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
} from 'react-native';
import {Divider, ListItem, SearchBar} from 'react-native-elements';
import {HomeStyle as styles} from '../../../styles/Style';

const screen = Dimensions.get('screen');

export default Home = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Image
        style={styles.banner}
        source={require('../../assets/home_banner.jpeg')}
      />
      <Text style={styles.newsHeader}>最新资讯</Text>
      <ListItem
        Component={TouchableHighlight}
        containerStyle={{}}
        disabledStyle={{opacity: 0.5}}
        onLongPress={() => console.log('onLongPress()')}
        onPress={() => console.log('onLongPress()')}
        pad={20}
        bottomDivider
        topDivider>
        <ListItem.Content>
          <ListItem.Title>
            <Text>第四金!速度滑冰男子500米</Text>
          </ListItem.Title>
          {/* <ListItem.Subtitle>
            <Text>React Native Elements</Text>
          </ListItem.Subtitle> */}
        </ListItem.Content>
        <Text>{'>'}</Text>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>
            <Text>第四金!速度滑冰男子500米</Text>
          </ListItem.Title>
          {/* <ListItem.Subtitle>
            <Text>React Native Elements</Text>
          </ListItem.Subtitle> */}
        </ListItem.Content>
        <Text>{'>'}</Text>
      </ListItem>
    </View>
  );
};
