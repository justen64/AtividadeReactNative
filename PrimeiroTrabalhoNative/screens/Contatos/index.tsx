import { View, Text, StyleSheet, Button, TouchableOpacity,Modal, TextInput, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { styles } from './styles';


export default function Contatos() {
  
  const [formularioVisivel, setFormilarioVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [contato, setContato] = useState<{id: string; nome: string; telefone: string }[]>([]);

  const handleNovoContato = () =>{
      setContato([...contato, {id: Date.now().toString(), nome, telefone}])
      setNome('');
      setTelefone('');
      setFormilarioVisivel(false);
  }

  const cardContato = ({ item }: { item: { id: string; nome: string; telefone: string } }) => (
    <View style={styles.card}>
      <Text style={styles.cardNome}>{item.nome}</Text>
      <Text>{item.telefone}</Text>
    </View>
  );

  return ( 
    <View style={styles.contaneir}>
     <View style={styles.contaneirFlat}>
     <FlatList
     contentContainerStyle={styles.flatListContainer}
     data={contato}
     keyExtractor={(item)=> item.id}
     renderItem={cardContato}
     ListEmptyComponent={  <Text style={{marginTop: 315}}>Nenhum Contato adicionado</Text>}
     />
     </View>
      <TouchableOpacity style={styles.botao} onPress={() => setFormilarioVisivel(true)}>
        <Text style={styles.botaoTexto}>+</Text>
      </TouchableOpacity>   
      <Modal
      animationType='fade'
      transparent={true}
      visible={formularioVisivel}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalDiv}>
            <Text style={styles.modalTitulo}>Novo Contato</Text>
            <TextInput placeholder='Nome...'
            style={styles.inputTexto}
            value={nome}
            onChangeText={setNome}
            />
            <TextInput placeholder='Telefone...'
            style={styles.inputTexto}
            value={telefone}
            onChangeText={setTelefone}
            keyboardType='phone-pad'
            />

            <TouchableOpacity onPress={handleNovoContato}
            style={styles.modalBotao}
            >
              <Text style={styles.modalBotaoTexto}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.modalBotao}
            onPress={() => setFormilarioVisivel(false)}>
              <Text style={styles.modalBotaoTexto}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>



  )
}

