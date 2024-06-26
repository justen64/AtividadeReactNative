import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import {styles} from './style'
import { Linking, TouchableOpacity } from 'react-native';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const CardSobre = () => (
  <><ScrollView style={styles.container}>
  <Card style={styles.card}>
    <Card.Title 
      title="Adinor Santana"
      subtitle={<><TouchableOpacity style={{marginRight:10}} onPress={() => Linking.openURL('https://www.linkedin.com/in/adinorsantanna')}>
        <FontAwesome name="linkedin-square" size={24} color="#0077B5" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/adinor8989')}>
      <FontAwesome name="github"  size={24} color="#333" /></TouchableOpacity></>
    }
      
      left={(props) => (
        <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/perfil.jpg')} />
      )} /></Card>

    <Card style={styles.card}>
    <Card.Title 
      title="Patrick Lopes"
      subtitle={<><TouchableOpacity style={{marginRight:10}} onPress={() => Linking.openURL('https://www.linkedin.com/in/patrick-haubrich-0868b624')}>
        <FontAwesome name="linkedin-square" size={24} color="#0077B5" />
      </TouchableOpacity><TouchableOpacity onPress={() => Linking.openURL('https://github.com/Haubrichp')}>
      <FontAwesome name="github"  size={24} color="#333" /></TouchableOpacity></>}

      left={(props) => (
        <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/patrick.png')} />
      )} /></Card>


<Card style={styles.card}>
    <Card.Title 
      title="Rodrigo Justen"
      subtitle={<><TouchableOpacity style={{marginRight:10}} onPress={() => Linking.openURL('https://www.linkedin.com/in/rodrigo-justen27')}>
        <FontAwesome name="linkedin-square" size={24} color="#0077B5" />
      </TouchableOpacity><TouchableOpacity onPress={() => Linking.openURL('https://github.com/justen64')}>
      <FontAwesome name="github"  size={24} color="#333" /></TouchableOpacity></>}
      left={(props) => (
        <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/rodrigo.jpeg')} />
      )} /></Card>
      
      <Card style={styles.card}>
    <Card.Title 
      title="Mateus Pereira"
      subtitle={<><TouchableOpacity style={{marginRight:10}} onPress={() => Linking.openURL('https://www.linkedin.com/in/mateus-pereira-daltro-134610275')}>
        <FontAwesome name="linkedin-square" size={24} color="#0077B5" />
      </TouchableOpacity><TouchableOpacity onPress={() => Linking.openURL('https://github.com/RandomlyActing')}>
      <FontAwesome name="github"  size={24} color="#333" /></TouchableOpacity></>}
      left={(props) => (
        <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/mateus.jpg')} />
      )} /></Card>
    
    <Card style={styles.card}>
    <Card.Title 
      title="Robert Gall"
      subtitle={<><TouchableOpacity style={{marginRight:10}} onPress={() => Linking.openURL('https://www.linkedin.com/in/robert-gall-591532280')}>
        <FontAwesome name="linkedin-square" size={24} color="#0077B5" />
      </TouchableOpacity><TouchableOpacity onPress={() => Linking.openURL('https://github.com/robertgall07')}>
      <FontAwesome name="github"  size={24} color="#333" /></TouchableOpacity></>}
      left={(props) => (
        <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/robert.png')} />
      )} /></Card>
    
    <Card style={styles.card}>
    <Card.Title 
      title="Lucas Mello"
      subtitle={<><TouchableOpacity style={{marginRight:10}} onPress={() => Linking.openURL('https://www.linkedin.com/in/lucas-mello-quadros-b5204a2a5/')}>
        <FontAwesome name="linkedin-square" size={24} color="#0077B5" />
      </TouchableOpacity><TouchableOpacity onPress={() => Linking.openURL('https://github.com/lucassmelloo1')}>
      <FontAwesome name="github"  size={24} color="#333" /></TouchableOpacity></>}
      left={(props) => (
        <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/lucas.jpeg')} />
      )} /></Card>
  </ScrollView></>
);



export default CardSobre;

