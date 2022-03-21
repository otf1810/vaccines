import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import VerificationCode from 'react-native-verification-code';

export default () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  let codeRef;

  const init = (node) => {
    codeRef = node;
    console.log('init');
  };

  return (
    <>
      <View style={{ paddingBottom: 20 }}></View>
      <Input
        leftIcon={<Icon name='call' size={20} />}
        rightIcon={
          <Icon
            name='close'
            size={20}
            onPress={() => {
              setPhone('');
            }}
          />
        }
        placeholder='请输入手机号码'
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <Input
        leftIcon={<Icon name='lock-closed' size={20} />}
        rightIcon={
          <Icon
            name='close'
            size={20}
            onPress={() => {
              setPassword('');
            }}
          />
        }
        placeholder='请输入密码'
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          buttonStyle={{ width: 150 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: '#00F',
          }}
          disabledTitleStyle={{ color: '#00F' }}
          linearGradientProps={null}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => alert('click')}
          title='注册'
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
      </View>
      <Text>手机号：{phone}</Text>
      <Text>密码：{password}</Text>
      <VerificationCode init={init} isColor />
      <Button
        title={'点击显示验证码'}
        onPress={() => alert(codeRef.state.code)}
      />
    </>
  );
};
