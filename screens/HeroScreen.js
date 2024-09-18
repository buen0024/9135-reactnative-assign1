import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Image, Button, StyleSheet, View, Text } from 'react-native';

const HeroScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image 
          source={{ uri: 'https://media.tenor.com/McY9R4_xYOIAAAAM/iron-man-tony-stark.gif' }} 
          style={styles.image} 
        />
        <Text style={styles.description}>Iron Man, also known as Tony Stark, is a genius billionaire inventor and a key member of the Avengers. Using his brilliant mind and cutting-edge technology, Tony built the Iron Man suit, a powerful, weaponized exoskeleton that gives him superhuman abilities.</Text>
        <View style={styles.buttonContainer}>
          <Button 
            title="Go to Homepage" 
            onPress={() => navigation.navigate('Home')} 
            color="#007BFF" 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Go to Suits page" 
            onPress={() => navigation.navigate('Suits')} 
            color="#007BFF" 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#333',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 30,
    borderRadius: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
  },
});

export default HeroScreen;
