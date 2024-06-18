import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from './styles'

export default function Login() {

  return (
    <View style={styles.container} >
    <TextInput
      placeholder="Digite seu login..."
      style={styles.inputCaixa}
      />
    <TextInput 
      placeholder="Digite sua senha..."
      style={styles.inputCaixa}
      />

   <TouchableOpacity style={styles.botao}>
    <Text style={styles.textoBotao}>Entrar</Text>
   </TouchableOpacity>
   
    
    
  </View>
  )
}




