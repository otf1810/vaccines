import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { t } from 'react-native-tailwindcss';
import Icon from 'react-native-vector-icons/Ionicons';
import Time from './Time';


const screen = Dimensions.get('screen');

const name = React.createRef();
const phone = React.createRef();

export default Order = ({ navigation }) => {
  
  return (
    <>
      <View style={[{ width: screen.width, height: 460, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }, t.bgWhite]}>
        <View style={[t.flexRow, t.itemsCenter, t.borderB, t.borderGray500]}>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={[t.h6, t.w6, t.m5]} source={require('../../assets/order/goBack.png')} />
          </TouchableOpacity>
          <Text style={[t.mL24, t.fontBlack, t.textLg]}>填写订单</Text>
        </View>
        <Input
          ref={name}
          containerStyle={[t.mT4]}
          disabledInputStyle={{ background: "black" }}
          inputContainerStyle={{}}
          errorMessage=""
          errorStyle={{}}
          errorProps={{}}
          inputStyle={[t.textBlack]}
          labelStyle={{}}
          labelProps={{}}
          leftIcon={<Icon name="person" size={20} />}
          leftIconContainerStyle={{}}
          rightIcon={<Icon name="close" size={20} onPress={() => { name.current.clear() }} />}
          rightIconContainerStyle={{}}
          placeholder="请输入姓名"

        />
        <Input
          ref={phone}
          containerStyle={{}}
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{}}
          errorMessage=""
          leftIcon={<Icon name="call" size={20} />}
          leftIconContainerStyle={{}}
          rightIcon={<Icon name="close" size={20} onPress={() => phone.current.clear()} />}
          rightIconContainerStyle={{}}
          placeholder="请输入手机号"
        />
        <Input
          containerStyle={{}}
          disabledInputStyle={{ background: "#ddd" }}
          inputContainerStyle={{}}
          errorMessage=""
          leftIcon={<Icon name="time" size={20} />}
          leftIconContainerStyle={{}}
          rightIcon={<Icon name="close" size={20} />}
          rightIconContainerStyle={{}}
          placeholder="请输入手机号"
          InputComponent={() => <Time />}
        />
      </View>
    </>
  )
  
}
