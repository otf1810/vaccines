import React, { Component, useState } from 'react';
import { AppRegistry, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { name as appName } from './app.json';
import Picker from 'react-native-picker';

export default Time = () => {

  const [currentDate, setCurrentDate] = useState('请选择接种日期');
  const [isShown, setIsShown] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  //获取当前日期  格式如 2018-12-15
  const _getCurrentDate = () => {
    var currDate = new Date()
    var year = currDate.getFullYear()
    var month = (currDate.getMonth() + 1).toString()
    month = month.padStart(2, '0')
    var dateDay = currDate.getDate().toString()
    dateDay = dateDay.padStart(2, '0')
    let time = year + '-' + month + '-' + dateDay
    return time;
  }
  //组装日期数据
  const _createDateData = () => {
    let date = [];
    var currDate = new Date()
    var year = currDate.getFullYear()
    var month = currDate.getMonth() + 1
    for (let i = 1970; i <= year; i++) {
      let month = [];
      for (let j = 1; j < 13; j++) {
        let day = [];
        if (j === 2) {
          for (let k = 1; k < 29; k++) {
            day.push(k + '日');
          }
          //Leap day for years that are divisible by 4, such as 2000, 2004
          if (i % 4 === 0) {
            day.push(29 + '日');
          }
        }
        else if (j in { 1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1 }) {
          for (let k = 1; k < 32; k++) {
            day.push(k + '日');
          }
        }
        else {
          for (let k = 1; k < 31; k++) {
            day.push(k + '日');
          }
        }
        let _month = {};
        _month[j + '月'] = day;
        month.push(_month);
      }
      let _date = {};
      _date[i + '年'] = month;
      date.push(_date);
    }
    return date;
  }
  //打开日期选择 视图
   const _showDatePicker = () => {
     if (isShown === true) return;
    var year = ''
    var month = ''
    var day = ''
    var dateStr = _getCurrentDate()
    console.log('dateStr',dateStr)
    year = dateStr.substring(0, 4)
    month = parseInt(dateStr.substring(5, 7))
    day = parseInt(dateStr.substring(8, 10))
    Picker.init({
      pickerTitleText: '请选择预约日期',
      pickerCancelBtnText: '取消',
      pickerConfirmBtnText: '确定',
      selectedValue: [year + '年', month + '月', day + '日'],
      pickerBg: [255, 255, 255, 1],
      pickerData: _createDateData(),
      pickerFontColor: [33, 33, 33, 1],
      onPickerConfirm: (pickedValue, pickedIndex) => {
        var year = pickedValue[0].substring(0, pickedValue[0].length - 1)
        var month = pickedValue[1].substring(0, pickedValue[1].length - 1)
        month = month.padStart(2, '0')
        var day = pickedValue[2].substring(0, pickedValue[2].length - 1)
        day = day.padStart(2, '0')
        let str = year + ' 年 ' + month + ' 月 ' + day + ' 日 '
        setCurrentDate(str);
        setIsShown(false);
      },
      onPickerCancel: (pickedValue, pickedIndex) => {
        setIsShown(false);
        console.log('date', pickedValue, pickedIndex);
      },
      onPickerSelect: (pickedValue, pickedIndex) => {
        console.log('date', pickedValue, pickedIndex);
      }
    });
    Picker.show();
    setIsShown(true);
  }
    return (
          <TouchableOpacity style={styles.container} onPress={() => _showDatePicker()}>
            <Text style={styles.textStyle}>{currentDate}</Text>
          </TouchableOpacity>
      // <View style={styles.container}>
      //   <View style={styles.content}>
      //     {/* <Text style={styles.textStyle}>选择日期</Text> */}
      //   </View>
      // </View>
    )
  }

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: 'black'
  },
  confirmedTextStyle: {},

  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 7
    // alignItems: 'center'
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})