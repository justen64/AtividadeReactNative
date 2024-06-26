import React from 'react';
import { Button } from 'react-native';
import { styles } from './style'; 

const Botao = ({ onPress }) => (
  <Button title="Adicionar" onPress={onPress} style={styles.botao} />
);

export default Botao;
