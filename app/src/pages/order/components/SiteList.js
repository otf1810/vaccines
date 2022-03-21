import React, { Component, useEffect, useState } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { ListItem } from 'react-native-elements';
import SelfadaptModal from 'react-native-selfadapt-modal';
import { Text } from 'react-native-elements';
import Picker from 'react-native-picker';

export default SiteList = (props) => {

  const { site, setSite } = props;

  const WEB_API_KEY = '08483bb1d2e63456fb25e294efa6f969'

  // gps经纬度转换成高德经纬度
  const getGDPosition = async (locations) => {
    const url = `https://restapi.amap.com/v3/assistant/coordinate/convert?key=${WEB_API_KEY}&locations=${locations}&coordsys=gps`;
    const response = await fetch(url);
    const json = await response.json();
    // console.log('getGDPosition json ' + JSON.stringify(json));
    return json.locations;
  }

  // 搜索周边
  const searchAround = (location) => {
    const url = `https://restapi.amap.com/v5/place/around?key=${WEB_API_KEY}&location=${location}&keywords=医院`;
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      // console.log('searchAround ' + JSON.stringify(data.pois));
      setArounds(data.pois);
    });
  }

  const [arounds, setArounds] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const getLocation = async () => {
      if (Platform.OS == 'ios') {
        // this.getPosition();
        console.log('ios is not supported by now...');
      } else {
        const permissions = [
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]
        // 获取定位权限
        const granteds = await PermissionsAndroid.requestMultiple(permissions);
        if (granteds["android.permission.ACCESS_FINE_LOCATION"] === "granted") {
          Geolocation.getCurrentPosition(async (result) => {
            console.log('getCurrentPosition ' + JSON.stringify(result));
            var position = `${result.coords.longitude},${result.coords.latitude}`;
            // console.log('position ' + position);
            position = await getGDPosition(position)
            // console.log('After getGDPosition ' + JSON.stringify(position));
            searchAround(position);
          })
        } else {
          Toast.info("定位权限被禁止")
        }
      }
    }
    if (isMounted) {
      getLocation();
    }
    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <SelfadaptModal
      menuList={arounds}
      containerStyle={{
        width: 320,
        marginLeft: 5
      }}
      onPress={(res) => { setSite(res.name); Picker.hide(); }}>
      {site == '' ?
        <Text style={{ fontSize: 18, color: 'rgb(134, 147, 158)' }}>请选择接种地点</Text>
        :
        <Text style={{ fontSize: 18, color: 'black' }}>{site}</Text>
      }
    </SelfadaptModal>
  );
}