import { View, Text, ActivityIndicator, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles';
import { Feather as Icon, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'; 

export const ContatosLista = () => {
    const [contacts, setContacts] = useState(null);

    const ContactCard = ({ item }) => {
        return (
            <View style={styles.containerCard}>
                <Image
                    source={{ uri: item.picture.thumbnail }}
                    style={styles.containerImage}
                />
                <View style={styles.containerText}>
                    <Text style={styles.containerName}>{item.name.first} {item.name.last}</Text>
                </View>
                <View style={styles.containerContact}>
                    <TouchableOpacity onPress={() => { Alert.alert(`Ligando para ${item.phone}`) }}>
                        <Icon name='phone' style={styles.icon} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Alert.alert(`Enviando Mensagem para ${item.cell}`) }}>
                        <Icon name='message-circle' style={styles.icon} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Alert.alert(`Enviando Email para ${item.email}`) }}>
                        <MaterialCommunityIcons name='email-outline' style={styles.icon} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=50&nat=br&inc=name,nat,phone,cell,picture,email')
            .then(({ data }) => {
                data.results.sort((contact1, contact2) =>
                    (contact1.name.first > contact2.name.first) ? 1 :
                    (contact1.name.first < contact2.name.first) ? -1 : 0
                );
                setContacts(data.results);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            {!contacts ? (
                <View style={styles.containerActivity}>
                    <ActivityIndicator size='large' />
                </View>
            ) : (
                <Animatable.View animation="fadeInUpBig" duration={5000} style={{ flex: 1 }}>
                    <FlatList
                        data={contacts}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={ContactCard}
                        ItemSeparatorComponent={<View style={styles.itemSeparator} />}
                    />
                </Animatable.View>
            )}
        </>
    );
};

