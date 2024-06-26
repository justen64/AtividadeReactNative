import React from 'react';
import { Button } from 'react-native';
import { styles } from './style'; 

const CustomButton = ({ onPress }) => (
  <Button title="Adicionar" onPress={onPress} style={styles.button} />
);

export default CustomButton;
