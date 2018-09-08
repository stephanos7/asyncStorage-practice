import React from 'react';
import { AsyncStorage } from "react-native"
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {

  }

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
