import { View, Text } from 'react-native'
import React from 'react'
import Routes from './routes'
import Login from './screens/Login'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
       <Routes /> 
    </NavigationContainer> 
  )
}