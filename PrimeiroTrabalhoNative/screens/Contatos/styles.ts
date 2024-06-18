import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    contaneir: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#d3d3d3',
      width: '100%',
    },
    contaneirFlat: {
      flex: 1,
      justifyContent: 'center',
      minWidth: '100%'
    },
    
    flatListContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 20,
      width: '100%',
    },

    botao: {
      width: 80,
      height: 80,
      borderRadius: 10,
      backgroundColor: '#054f77',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
    botaoTexto: {
      fontSize: 40,
      color: 'white'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      
    },
    modalDiv: {
     
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
    },
    modalTitulo: {
      fontSize: 18,
      marginBottom: 15,
    },
    inputTexto: {
      width: '100%',
      height: 40,
      borderColor: 'gray', 
      borderWidth: 1,
      marginBottom: 15,
      paddingLeft: 8,
    },
    modalBotao: {
      width: '100%',
      height: 40,
      backgroundColor: '#add8e6',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 10,
    },
    modalBotaoTexto: {
      color: 'white',
      fontSize: 16,
    },
    card: {
      width: 300,
      padding: 20,
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      marginVertical: 10,
      alignItems: 'center',
    },
    cardNome: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  
  })