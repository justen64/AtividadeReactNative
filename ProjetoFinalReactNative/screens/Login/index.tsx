import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FireBaseConnection";
import { useNavigation } from "@react-navigation/native";
import { AnimatedButton } from "../../components/animacoes/AnimatedButton";
import { SafeAreaView } from "moti";
import ConexaoInternet from "../../components/ConexaoAInternet";

export default function Login() {
  interface login {
    id?: string;
    senha: string;
    nomeUsuario: string;
  }

  const [logado, setLogado] = useState("");
  const [logando, setLogando] = useState<login>({
    senha: "",
    nomeUsuario: "",
  });
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();
 
  
 const validacao =(() => {
      async function getContato() {
          const docRef = doc(db, "Contatos", email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const dados: login = {
          id: docSnap.id,
          senha: docSnap.data().senha,
          nomeUsuario: docSnap.data().nomeUsuario,
        };
        setLogando(dados);
        logando.senha === senha ? setLogado(logando.nomeUsuario) : "";
        navigation.jumpTo("Contatos");
        setEmail('');
        setSenha('');
    }else{
        Alert.alert("Erro", "Email ou senha inválidos");
    }
}
getContato();
  });

  return (
    <SafeAreaView style={styles.container}>
      <ConexaoInternet/>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(texto) => setEmail(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
      />
      <AnimatedButton onPress={validacao} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
