import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Home() {
 const [nome,setNome]=useState('');

  return (
    <View >
    <TextInput
      placeholder="Digite Seu Login"
      
    />
    <Text>{nome}</Text>
<>

</>
     <TextInput 
      placeholder="Digite sua senha"/>
      <Text>{nome}</Text>
   
    <Button title='Login'  >
     </Button>
  </View>
  )
}



