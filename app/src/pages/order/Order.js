import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Header, Text, Input, Button } from 'react-native-elements';
import { t } from 'react-native-tailwindcss';
import Icon from 'react-native-vector-icons/Ionicons';
import SiteList from './components/SiteList';
import DatePicker from './components/DatePicker';
import Picker from 'react-native-picker';

const screen = Dimensions.get('screen');

export default Order = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [site, setSite] = useState('');

  const { vaccineId } = route.params;

  return (
    <>
      <Header
        // elevated
        backgroundColor='#4169E1'
        backgroundImageStyle={{}}
        barStyle='light-content'
        centerComponent={{
          text: '预约信息',
          style: { color: '#fff' },
        }}
        centerContainerStyle={{}}
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => {
            Picker.hide();
            navigation.goBack();
          },
        }}
        leftContainerStyle={{}}
        placement='center'
        statusBarProps={{}}
      />
      <View
        style={[
          {
            width: screen.width,
            height: 460,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            paddingTop: 15,
          },
          t.bgWhite,
        ]}>
        {/* <View style={[t.flexRow, t.itemsCenter, t.borderB, t.borderGray500]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={[t.h6, t.w6, t.m5]} source={require('@assets/order/goBack.png')} />
          </TouchableOpacity>
          <Text style={[t.mL24, t.fontBlack, t.textLg]}>填写订单</Text>
        </View> */}
        <Input
          // containerStyle={[t.mT4]}
          inputStyle={[t.textBlack]}
          leftIcon={<Icon name='person' size={20} color='#4169E1' />}
          rightIcon={
            <Icon
              name='close'
              size={20}
              onPress={() => {
                setName('');
              }}
            />
          }
          placeholder='请输入姓名'
          value={name}
          onChangeText={(text) => setName(text)}
          onFocus={() => {
            Picker.hide();
          }}
        />
        <Input
          inputStyle={[t.textBlack]}
          leftIcon={<Icon name='call' size={20} color='#4169E1' />}
          rightIcon={
            <Icon name='close' size={20} onPress={() => setPhone('')} />
          }
          placeholder='请输入手机号'
          value={phone}
          onChangeText={(text) => setPhone(text)}
          onFocus={() => {
            Picker.hide();
          }}
        />
        <Input
          leftIcon={<Icon name='time' size={20} color='#4169E1' />}
          rightIcon={
            <Icon
              name='close'
              size={20}
              onPress={() => {
                setTime('');
              }}
            />
          }
          placeholder='请输入手机号'
          InputComponent={() => <DatePicker time={time} setTime={setTime} />}
        />
        <Input
          leftIcon={<Icon name='podium' size={20} color='#4169E1' />}
          rightIcon={
            <Icon
              name='close'
              size={20}
              onPress={() => {
                setSite('');
              }}
            />
          }
          placeholder='请输入手机号'
          InputComponent={() => <SiteList site={site} setSite={setSite} />}
        />
        {/* <Button title='提交' onPress={() => { console.log("+++++++++++" + time.current.state.currentDate) }} /> */}

        {/* <Button title='提交' onPress={() => { console.log("+++++++++++" + vaccineId) }} /> */}
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
          onPress={() => navigation.navigate('Order', { vaccineId: vaccineId })}
        />
      </View>
      <Text>姓名：{name}</Text>
      <Text>手机号：{phone}</Text>
      <Text>日期：{time}</Text>
      <Text>地点：{site}</Text>
    </>
  );
};
