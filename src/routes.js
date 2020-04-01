import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import HomeStyles from './pages/Home/styles'

import Contato from './pages/Contato';
import ContatoStyles from './pages/Contato/styles';

import Horario from './pages/Horario';
import HorarioStyles from './pages/Horario/styles';

import Sobre from './pages/Sobre';
import SobreStyles from './pages/Sobre/styles';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>

      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon:({focused, tintColor}) => {
            if (focused) {
              return(
                <Image source={require('../assets/images/home_azul.png')} style={HomeStyles.icone}/>
              )
            } else {
              return(
                <Image source={require('../assets/images/home_preto.png')} style={HomeStyles.icone}/>
              )
            }
          }
        }}        
        />

      <Tab.Screen 
        name="Contato" 
        component={Contato}
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon:({focused, tintColor}) => {
            if (focused) {
              return(
                <Image source={require('../assets/images/contato_azul.png')} style={ContatoStyles.icone}/>
              )
            } else {
              return(
                <Image source={require('../assets/images/contato_preto.png')} style={ContatoStyles.icone}/>
              )
            }
          }
        }}  
        />
      <Tab.Screen 
        name="Horario" 
        component={Horario} 
        options={{
          tabBarLabel: 'Horario',
          tabBarIcon:({focused, tintColor}) => {
            if (focused) {
              return(
                <Image source={require('../assets/images/relogio_azul.png')} style={HorarioStyles.icone}/>
              )
            } else {
              return(
                <Image source={require('../assets/images/relogio_preto.png')} style={HorarioStyles.icone}/>
              )
            }
          }
        }}          
        />
      <Tab.Screen 
        name="Sobre" 
        component={Sobre} 
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon:({focused, tintColor}) => {
            if (focused) {
              return(
                <Image source={require('../assets/images/info_azul.png')} style={SobreStyles.icone}/>
              )
            } else {
              return(
                <Image source={require('../assets/images/info_preto.png')} style={SobreStyles.icone}/>
              )
            }
          }
        }}          
        />
    </Tab.Navigator>
  );
}