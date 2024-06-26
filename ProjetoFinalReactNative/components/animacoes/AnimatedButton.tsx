// AnimatedButton.tsx
import React, { useRef } from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';
import styles from './style';

interface animacao{
  onPress:() => void
}

 export const AnimatedButton = ({onPress}:animacao) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  };

  return (
      <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={onPress}
          style={styles.touchable}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
  );
};


