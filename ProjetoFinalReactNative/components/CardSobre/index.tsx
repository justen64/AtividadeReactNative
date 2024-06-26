import * as React from 'react';
import { ScrollView, View, Linking } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { styles } from './style';

const CardSobre = () => (
  <ScrollView style={styles.container}>
    <Card style={styles.card}>
      <Card.Title
        title="Adinor Santana"
        subtitle={
          <View style={styles.iconContainer}>
            <IconButton
              icon="linkedin"
              iconColor="#0077B5"
              size={24}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/adinorsantanna')}
            />
            <IconButton
              icon="github"
              iconColor="#333"
              size={24}
              onPress={() => Linking.openURL('https://github.com/adinor8989')}
            />
          </View>
        }
        left={(props) => (
          <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/perfil.jpg')} />
        )}
      />
    </Card>

    <Card style={styles.card}>
      <Card.Title
        title="Patrick Lopes"
        subtitle={
          <View style={styles.iconContainer}>
            <IconButton
              icon="linkedin"
              iconColor="#0077B5"
              size={24}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/patrick-haubrich-0868b624')}
            />
            <IconButton
              icon="github"
              iconColor="#333"
              size={24}
              onPress={() => Linking.openURL('https://github.com/Haubrichp')}
            />
          </View>
        }
        left={(props) => (
          <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/patrick.png')} />
        )}
      />
    </Card>

    <Card style={styles.card}>
      <Card.Title
        title="Rodrigo Justen"
        subtitle={
          <View style={styles.iconContainer}>
            <IconButton
              icon="linkedin"
              iconColor="#0077B5"
              size={24}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/rodrigo-justen27')}
            />
            <IconButton
              icon="github"
              iconColor="#333"
              size={24}
              onPress={() => Linking.openURL('https://github.com/justen64')}
            />
          </View>
        }
        left={(props) => (
          <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/rodrigo.jpeg')} />
        )}
      />
    </Card>

    <Card style={styles.card}>
      <Card.Title
        title="Mateus Pereira"
        subtitle={
          <View style={styles.iconContainer}>
            <IconButton
              icon="linkedin"
              iconColor="#0077B5"
              size={24}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/mateus-pereira-daltro-134610275')}
            />
            <IconButton
              icon="github"
              iconColor="#333"
              size={24}
              onPress={() => Linking.openURL('https://github.com/RandomlyActing')}
            />
          </View>
        }
        left={(props) => (
          <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/mateus.jpg')} />
        )}
      />
    </Card>

    <Card style={styles.card}>
      <Card.Title
        title="Robert Gall"
        subtitle={
          <View style={styles.iconContainer}>
            <IconButton
              icon="linkedin"
              iconColor="#0077B5"
              size={24}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/robert-gall-591532280')}
            />
            <IconButton
              icon="github"
              iconColor="#333"
              size={24}
              onPress={() => Linking.openURL('https://github.com/robertgall07')}
            />
          </View>
        }
        left={(props) => (
          <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/robert.png')} />
        )}
      />
    </Card>

    <Card style={styles.card}>
      <Card.Title
        title="Lucas Mello"
        subtitle={
          <View style={styles.iconContainer}>
            <IconButton
              icon="linkedin"
              iconColor="#0077B5"
              size={24}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/lucas-mello-quadros-b5204a2a5/')}
            />
            <IconButton
              icon="github"
              iconColor="#333"
              size={24}
              onPress={() => Linking.openURL('https://github.com/lucassmelloo1')}
            />
          </View>
        }
        left={(props) => (
          <Avatar.Image {...props} style={styles.avatar} source={require('../../assets/lucas.jpeg')} />
        )}
      />
    </Card>
  </ScrollView>
);

export default CardSobre;


