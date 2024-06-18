import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

const CardSobre = () => (
  <ScrollView style={styles.container}>
    <Card style={styles.card}>
      <Card.Title
        title="Adinor Santanna"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/perfil.jpg')} />}
      />
    </Card>
    <Card style={styles.card}>
      <Card.Title
        title="Patrick Lopes"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/patrick.png')} />}
      />
    </Card>
    <Card style={styles.card}>
      <Card.Title
        title="Rodrigo Justen"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/014.png')} />}
      />
    </Card>
    <Card style={styles.card}>
      <Card.Title
        title="Mateus Pereira"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/mateus.jpg')} />}
      />
    </Card>
    <Card style={styles.card}>
      <Card.Title
        title="Robert Gall"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/robert.png')} />}
      />
    </Card>
    <Card style={styles.card}>
      <Card.Title
        title="Lucas Mello"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/lucas.jpeg')} />}
      />
    </Card>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'gray',
  },
  card: {
    marginVertical: 5,
    elevation: 3,
  },
  avatar: {
    backgroundColor: '#e0e0e0',
  },
});

export default CardSobre;

