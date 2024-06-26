import * as React from 'react';
import { ScrollView, View, Linking } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import CardSobre from '../../components/CardSobre';
import ConexaoInternet from '../../components/ConexaoAInternet';
import { SafeAreaView } from 'moti';

export default function Sobre(){
  return(
    <SafeAreaView>
    <ConexaoInternet/>
    <CardSobre/>
    </SafeAreaView>
  )
}


