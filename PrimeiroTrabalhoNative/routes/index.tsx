import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import Ajuda from '../screens/Ajuda';
import Contatos from '../screens/Contatos';
import Sobre from '../screens/Sobre';

export default function Routes() {
    const Drawer= createDrawerNavigator();
  return (
<Drawer.Navigator>
    <Drawer.Screen name ="Home" component={Home}/>
    <Drawer.Screen name ="Ajuda" component={Ajuda}/>
    <Drawer.Screen name ="Contatos" component={Contatos}/>
    <Drawer.Screen name ="Sobre" component={Sobre}/>
</Drawer.Navigator>
  )
}