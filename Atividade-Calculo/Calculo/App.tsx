// App.js
import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Provider as PaperProvider, TextInput, Button, Text, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [resultado, setResultado] = useState('');

const calcular = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);
    const proporcao = precoAlcool / precoGasolina;

    if (proporcao < 0.7) {
      setResultado('É mais vantajoso abastecer com Álcool');
    } else {
      setResultado('É mais vantajoso abastecer com Gasolina');
    }

    setModalVisible(true);
  };

  return (
    <PaperProvider>
    <View style={styles.container}>
    <IconButton
    icon="fuel"
    color="black"
    size={60}
    style={styles.icon}
    />
    <Text style={styles.title}>Calculadora de Combustível</Text>
    <TextInput
    label="Preço do Álcool"
    mode="outlined"
    keyboardType="numeric"
    value={alcool}
    onChangeText={setAlcool}
    style={styles.input}
    />
    <TextInput
    label="Preço da Gasolina"
    mode="outlined"
    keyboardType="numeric"
    value={gasolina}
    onChangeText={setGasolina}
    style={styles.input}
    />
    <Button mode="contained" onPress={calcular} style={styles.button}>
     Calcular
    </Button>
    <Modal
     transparent={true}
     visible={modalVisible}
     animationType="fade"
     >
    <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
    <Text style={styles.resultText}>{resultado}</Text>
    <Button mode="contained" onPress={() => setModalVisible(false)}>
      Calcular Novamente
    </Button>
    </View>
    </View>
    </Modal>
    </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default App;
