import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { styles } from './style';

interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void; //aqui tipei o onPress
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text>Adicionar</Text>
  </TouchableOpacity>
);

export default CustomButton;


