import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeList from './HomeList'
import HomeProducts from './HomeProducts'

export default function Home() {

  //const {title} = route.params;

  return (
    <Stack.Navigator>
      
      <Stack.Screen name="HomeList" component={HomeList} options={{
        title:"Cardápio",
        headerTitleAlign: 'center'
        }}/>

      <Stack.Screen name="HomeProducts" component={HomeProducts} options={
        ({route}) => ({
          title: route.params.title, 
          headerTitleAlign:'center',
        })
      }/>
    </Stack.Navigator>
  );
}


