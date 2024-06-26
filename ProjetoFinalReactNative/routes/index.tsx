import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import { ContatosLista } from '../screens/ContatosLista';
import Sobre from '../screens/Sobre'

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
   
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Contatos" component={ContatosLista} />
        <Drawer.Screen name="Sobre" component={Sobre} />
      </Drawer.Navigator>
    
  );
}
