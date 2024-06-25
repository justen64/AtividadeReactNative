// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {AnimatedButton} from './components/animacoes/AnimatedButton';


function App() {
  return (
    <View style={styles.container}>
      <AnimatedButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
