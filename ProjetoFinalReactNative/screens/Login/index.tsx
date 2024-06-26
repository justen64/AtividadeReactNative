import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, ImageBackground } from "react-native";
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
    <ImageBackground style={styles.container} source={require("../../assets/background-login.jpg")}>
  <SafeAreaView >
    <ConexaoInternet/>
    <Text style={styles.title}>Bem vindo</Text>
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={(texto) => setEmail(texto)}
      />
    <TextInput
      style={styles.input}
      placeholder="Senha"
      secureTextEntry={true}
      value={senha}
      onChangeText={(texto) => setSenha(texto)}
      />
    <AnimatedButton onPress={validacao} />
      

  </SafeAreaView>
  </ImageBackground>

);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 20,
  
},
title: {
  fontSize: 32, 
  fontWeight: "bold",
  color: "#333", 
  marginBottom: 40, 
  textAlign: "center",
},
input: {
  width: "100%",
  height: 50,
  borderColor: "#004d40", 
  borderWidth: 1,
  borderRadius: 12, 
  backgroundColor: "#ffffff", 
  marginBottom: 25, 
  paddingHorizontal: 15,
  fontSize: 18,
  shadowColor: "#000", 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
},
buttonContainer: {
  width: "100%",
  marginTop: 30, 
  alignItems: "center",
},
button: {
  width: "80%",
  height: 50,
  backgroundColor: "#00796b", 
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 12, 
  shadowColor: "#000", 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  elevation: 3,
},
buttonText: {
  fontSize: 20, 
  color: "#ffffff", 
  fontWeight: "bold",
},
});