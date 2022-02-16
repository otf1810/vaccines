/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Home from './app/src/pages/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TabBar} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

export default App;
