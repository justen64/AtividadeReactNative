// AnimatedButton.tsx
import React, { useRef } from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';
import styles from './style';

 export const AnimatedButton = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => console.log('Login button pressed')}
          style={styles.touchable}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};


