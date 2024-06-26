import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import { ContactsList } from '../components/ContactsList';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
   
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Contatos" component={ContactsList} />
      </Drawer.Navigator>
    
  );
}
