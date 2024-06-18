import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Login() {
 const [nome,setNome]=useState('');

  return (
    <View >
    <TextInput
      placeholder="Digite Seu Login"/>
    <TextInput 
      placeholder="Digite sua senha"/>
     <Text>{nome}</Text>
    <Button title='Login'  >
    </Button>
    <Text>{nome}</Text>
  </View>
  )
}




