import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; 
import { styles } from './style'; 

const EmpresaCard = ({ empresa }) => (
  <Card style={styles.card}>
    <View style={styles.cardContent}>
      <FontAwesome name={empresa.icone} size={50} style={styles.cardIcon} />
      <Text style={styles.title}>{empresa.nome}</Text>
      <Text style={styles.description}>{empresa.descricao}</Text>
    </View>
  </Card>
);

export default EmpresaCard;
