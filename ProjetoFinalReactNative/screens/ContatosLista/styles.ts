import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerActivity: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    container: {
        flex: 1
    },
    containerHeader:{
        marginTop: 20,
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#52a6eb'
        
    },
    headerTitle: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    containerImage: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    containerText: {
        flex: 1,
        paddingHorizontal: 10
    },
    containerName: {
        fontSize: 16
    },
    containerCard: {
        flexDirection: 'row',
        margin: 4,
        backgroundColor: '#B4DDFF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        alignItems: 'center',
        height: 60
    },
    containerContact: {
        flexDirection: 'row'

    },
    icon: {
        marginLeft: 12
    },
    itemSeparator: {
        borderWidth: 1,
        borderColor: '#f6f6f6'
    }



})

export default styles;