import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import styles from './Styles';

const data = [
  { id: 1, name: "Não consegue fazer o login?" },
  { id: 2, name: "Perdeu acesso a conta?" },
  { id: 3, name: "Precisa fazer contato?" },
  { id: 4, name: "Duvidas sobre um produto?" },
  { id: 5, name: "Deseja deletar sua conta?" },
]

export default function SearchBar() {
  const [dataFromState, setData] = useState(data);

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={{ fontSize: 34 }}>{item.name}</Text>
      </View>
    );
  };

  const searchName = (input: string) => {
    let searchData = data.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setData(searchData);
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 10,}}> <h2>Central de duvidas</h2> </View>
      <TextInput
        placeholder='Procure ajuda'
        onChangeText={(input) => searchName(input)}
        style={styles.input}
      />
      <FlatList
        data={dataFromState}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

