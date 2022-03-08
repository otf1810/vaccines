/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Home from './app/src/pages/Home';
import VaccineInfo from './app/src/pages/VaccineInfo';
import Order from './app/src/pages/Order';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabsScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => <DrawerToggleButton />
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Messages" component={Messages} />
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

const Profile = () => {
  return <Text>I'm Profile</Text>
}

const Settings = () => {
  return <Text>I'm Settings</Text>
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
