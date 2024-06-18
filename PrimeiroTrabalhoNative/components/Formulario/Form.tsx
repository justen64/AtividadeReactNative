import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function Form() {
    const [nome,setNome]= useState('');
    const [numero,setNumero]=useState(Number);
    
  return (
    <View>
      <Text>Form</Text>
    </View>
  )
}