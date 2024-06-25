import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from '../screens/Login';
import Contato from '../screens/Login/Contato';

export default function Routes() {
    const Drawer= createDrawerNavigator();
  return (
<Drawer.Navigator>
    <Drawer.Screen name ="Login" component={Login}/>
    <Drawer.Screen name ="Contato" component={Contato}/>
</Drawer.Navigator>
  )
}