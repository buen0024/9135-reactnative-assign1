import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, StyleSheet, View} from 'react-native';


const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Hero page"
          onPress={() => navigation.navigate('Hero')}
          color="#841584"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Suits page"
          onPress={() => navigation.navigate('Suits')}
          color="#841584"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  buttonContainer: {
    marginBottom: 15,
    width: '80%',
  },
});

export default Homescreen