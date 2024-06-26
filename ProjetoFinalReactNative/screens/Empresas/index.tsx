import React, { useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import EmpresaCard from '../../components/EmpresaCard/EmpresaCard';
import Button from '../../components/Button/button';
import { styles } from './style';
import ConexaoInternet from '../../components/ConexaoAInternet';

export const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [descricaoEmpresa, setDescricaoEmpresa] = useState('');

  const adicionarEmpresa = () => {
    if (nomeEmpresa.trim() === '' || descricaoEmpresa.trim() === '') {
      alert('Por favor, preencha o nome e a descrição da empresa.');
      return;
    }

    const novaEmpresa = {
      id: empresas.length + 1,
      nome: nomeEmpresa,
      descricao: descricaoEmpresa,
      icone: 'building', 
    };
    setEmpresas([...empresas, novaEmpresa]);
    setNomeEmpresa('');
    setDescricaoEmpresa('');
    console.log('Empresa adicionada:', novaEmpresa);
  };

  const renderItem = ({ item }) => <EmpresaCard empresa={item} />;

  return (
    <View style={styles.container}>
      <ConexaoInternet/>
      <TextInput
        style={styles.input}
        placeholder="Nome da Empresa"
        value={nomeEmpresa}
        onChangeText={(text) => setNomeEmpresa(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição da Empresa"
        value={descricaoEmpresa}
        onChangeText={(text) => setDescricaoEmpresa(text)}
      />
      <Button onPress={adicionarEmpresa} />
      
      <FlatList
        data={empresas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};










