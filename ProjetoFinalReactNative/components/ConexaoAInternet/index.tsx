import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo';

export default function ConexaoInternet() {
 
 const [isconectado, setConectado] = useState(true)


useEffect(() =>{

    const handleUnsubcrite=(state)=>{
        if(state.isConnected !== isconectado){
            setConectado(state.conectado)
            
            if(!state.conectado){
                Alert.alert('Internet desconectada');
            }
            else{
                Alert.alert('Internet conectada');
            }
        }
        
    }
    
    const unsubcribe = NetInfo.addEventListener(handleUnsubcrite)
    return () =>{
        unsubcribe()
    }
},[isconectado])
   
 
    return (
    <View>
     
    </View>
  )
}