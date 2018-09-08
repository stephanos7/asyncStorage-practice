import React from 'react';
import { AsyncStorage } from "react-native"
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {

  }

  // save a single item in storage
  storeSingleItem = async () => {
    try {
      await AsyncStorage.setItem('KEY123456', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  }

  // get all keys available in asyncStorage
  retrieveKeys = async () => {
    try{
      const keys = await AsyncStorage.getAllKeys();
      if(keys !== null){
        alert(JSON.stringify(keys));
      }
    }
    catch(error){
      console.log(error);
    }
  }

  componentDidMount() {
    this.storeSingleItem();
    this.retrieveKeys();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
