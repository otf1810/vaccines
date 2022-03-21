import React, { useState } from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import { Avatar, BottomSheet, Button, ButtonGroup, Header, ListItem, Overlay, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const info = {
  username: 'outf',
  phone: '15118768293',
  address: '广东技术师范大学',
  birth: '2000-02-27'
}

export default () => {

  const [data, setData] = useState(info);
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Header
        elevated
        backgroundColor='#4169E1'
        backgroundImageStyle={{}}
        barStyle='light-content'
        centerComponent={{
          text: "个人中心",
          style: { color: "#fff" }
        }}
        centerContainerStyle={{}}
        leftComponent={{ icon: "menu", color: "#fff" }}
        leftContainerStyle={{}}
        placement="center"
        statusBarProps={{}} />
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={false}>
        <View style={{ marginVertical: 20, alignItems: 'center' }}>
          <Avatar
            activeOpacity={0.2}
            avatarStyle={{}}
            containerStyle={{ backgroundColor: "#BDBDBD" }}
            icon={{}}
            iconStyle={{}}
            imageProps={{}}
            onLongPress={() => alert("onLongPress")}
            onPress={() => alert("onPress")}
            overlayContainerStyle={{}}
            placeholderStyle={{}}
            rounded
            size="large"
            // source={{ uri: "" }}
            title="P"
            titleStyle={{}}
          />
          <Text>Username</Text>
        </View>
        <ListItem.Accordion bottomDivider
          content={
            <>
              <Icon name="newspaper" color='#4169E1' size={30} style={{ marginRight: 20 }} />
              <ListItem.Content>
                <ListItem.Title>个人信息</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
        >
          <ListItem bottomDivider>
            <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <ListItem.Title>用户名</ListItem.Title>
              <ListItem.Title>{data.username}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <ListItem.Title>手机号</ListItem.Title>
              <ListItem.Title>{data.phone}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <ListItem.Title>地址</ListItem.Title>
              <ListItem.Title>{data.address}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <ListItem.Title>生日</ListItem.Title>
              <ListItem.Title>{data.birth}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <Button title={'编辑'} type='clear' onPress={() => { setIsVisible(true) }} />
        </ListItem.Accordion>
        <ListItem.Accordion bottomDivider
          content={
            <>
              <Icon name="paper-plane" color='#4169E1' size={30} style={{ marginRight: 20 }} />
              <ListItem.Content>
                <ListItem.Title>预约记录</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded2}
          onPress={() => {
            setExpanded2(!expanded2);
          }}
        >
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>北京科兴</ListItem.Title>
              <ListItem.Subtitle>广东技术师范大学</ListItem.Subtitle>
              <ListItem.Subtitle>2022-03-20</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
              {/* <ListItem.Title style={{color: 'blue'}}>已完成</ListItem.Title> */}
              <ListItem.Title style={{ color: 'red' }}>已取消</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>
        <ListItem.Accordion bottomDivider
          content={
            <>
              <Icon name="medkit" size={30} color='#4169E1' style={{ marginRight: 20 }} />
              <ListItem.Content>
                <ListItem.Title>接种记录</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded3}
          onPress={() => {
            setExpanded3(!expanded3);
          }}
        >
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>第1针</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content right>
              <ListItem.Title>北京科兴</ListItem.Title>
              <ListItem.Subtitle>2022-03-20</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>
      </ScrollView>

      <BottomSheet overlayStyle={{ width: '90%', height: '50%' }} isVisible={isVisible} onBackdropPress={() => { setIsVisible(!isVisible) }}>
        <ListItem bottomDivider>
          <Text>编辑信息</Text>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>用户名</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Input placeholder={data.username} />
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>手机号</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Input placeholder={data.phone} />
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>地址</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Input placeholder={data.address} />
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>生日</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Input placeholder={data.birth} />
          </ListItem.Content>
        </ListItem>
        <ListItem >
          <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button onPress={() => { setIsVisible(false) }} title={'取消'} buttonStyle={{ backgroundColor: '#ee2b2d', width: 100 }} />
            <Button onPress={() => { setIsVisible(false) }} title={'保存'} buttonStyle={{ backgroundColor: '#4169E1', width: 100 }} />
          </ListItem.Content>
        </ListItem>
      </BottomSheet>
    </>
  );
}