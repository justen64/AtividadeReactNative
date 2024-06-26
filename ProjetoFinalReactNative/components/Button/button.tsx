import React from 'react';
import { Button } from 'react-native';
import { styles } from './style'; 

export const CustomButton = ({ onPress }) => (
  <Button title="Adicionar" onPress={onPress} style={styles.button} />
);


