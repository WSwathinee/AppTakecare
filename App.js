import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourPage from './pages/FourPage';
import FivePage from './pages/FivePage';
import SixPage from './pages/SixPage';

const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'เข้าสู่ระบบ', //Set Header Title
            headerStyle: {
              backgroundColor: '#ff80ab', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'ลงทะเบียน', //Set Header Title
            headerStyle: {
              backgroundColor: '#ff80ab', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{
            title: 'Welcome to App', //Set Header Title
            headerStyle: {
              backgroundColor: '#ff80ab', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="FourPage"
          component={FourPage}
          options={{
            title: 'ค้นหาเครื่องสำอาง', //Set Header Title
            headerStyle: {
              backgroundColor: '#ff80ab', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="FivePage"
          component={FivePage}
          options={{
            title: 'ผลการค้นหา', //Set Header Title
            headerStyle: {
              backgroundColor: '#ff80ab', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="SixPage"
          component={SixPage}
          options={{
            title: 'วิเคราะห์ส่วนผสมเครื่องสำอาง', //Set Header Title
            headerStyle: {
              backgroundColor: '#ff80ab', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        
       
       
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;