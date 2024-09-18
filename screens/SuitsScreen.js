import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, Text, StyleSheet, Alert, Image } from 'react-native';

const data = [
  { id: '1', title: 'Mark III', image: 'https://pandahobby.ca/cdn/shop/files/IronManMK3_MarkIII1_9-27_700x700.jpg?v=1691086688' },
  { id: '2', title: 'Mark VII', image: 'https://example.com/mark7.jpg' },
  { id: '3', title: 'Mark XLII', image: 'https://example.com/mark42.jpg' }
];

const Thirdscreen = ({ navigation }) => {
  const showAlertWithImage = (title, image) => {
    Alert.alert(
      title,
      'Here is an image of ' + title,
      [
        { text: 'OK' }
      ],
      { cancelable: true }
    );
  };

  const renderItem = ({ item }) => (
    <Pressable style={styles.item} onPress={() => alert(`You pressed ${item.title}`)}>
      <Text style={styles.itemText}>{item.title}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home Page</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Hero')}>
        <Text style={styles.buttonText}>Go to Hero Page</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  list: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#C8102E',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  itemText: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Thirdscreen;
