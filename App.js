import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerToggleButton, useDrawerProgress } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Animated, Text } from 'react-native';
import Home from './app/src/pages/home/Home';
import VaccineInfo from './app/src/pages/vaccineInfo/VaccineInfo';
import Order from './app/src/pages/order/Order';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './app/src/pages/login/Login';
import Register from './app/src/pages/register/Register';
import Profile from './app/src/pages/profile/Profile';
import { Button } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

tabBarIcon = (route, focused, size) => {
  // console.log('.....')
  var iconName
  if (route.name === '首页') {
    iconName = focused
      ? 'home'
      : 'home-outline';
  } else if (route.name === '信息') {
    iconName = focused ? 'mail-open' : 'mail-outline';
  } else if (route.name === '个人中心') {
    iconName = focused ? 'person' : 'person-outline';
  }
  return <Icon name={iconName} size={25} color='white' />
}

const TabsScreen = () => {
  return (
    <Tab.Navigator
      labeled={false}
      shifting
      barStyle={{ backgroundColor: '#4169E1' }}
      screenOptions={({ navigation, route }) => ({
        // headerLeft: () => <DrawerToggleButton />,
        tabBarIcon: ({ focused, color, size }) => tabBarIcon(route, focused, size)
      })}>
      <Tab.Screen name="首页" component={Home} options={{ headerShown: true }} />
      <Tab.Screen name="信息" component={Messages} />
      <Tab.Screen name="个人中心" component={Profile} />
    </Tab.Navigator>
  );
}

const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabsScreen} />
      <Stack.Screen name="VaccineInfo" component={VaccineInfo} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  )
}


const Messages = () => {
  return <Text>I'm Messages</Text>
}

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='Home' component={StackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  )
};

export default App;
