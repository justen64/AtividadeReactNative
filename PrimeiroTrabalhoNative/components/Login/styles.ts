import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,   
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    inputCaixa: {
        width: 300,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
    },
    botao: {
        width: 300,
        height: 40,
        backgroundColor: '#add8e6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        fontSize: 18,
        color: '#fff',
    }
})