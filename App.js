import React from 'react';
import { AsyncStorage } from "react-native"
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    keys:null
  }

  // removes single item from storage based on the keys in state
  removeSingleItem = async () => {
    const keys = this.state.keys;
    if(keys.length !== 0){
      let key = await keys.pop();
      alert(`key is, ${key}`)
      try{
        await AsyncStorage.removeItem(key);
      }
      catch(error){
        console.log(error)
      }
    }else{
      alert("no more to remove!")
    }
  }

  // save a single item in storage
  storeSingleItem = async () => {
    try{
      await AsyncStorage.setItem("Geography", JSON.stringify({lesson:"geo", teacher:"mark"}));
    }
    catch(error){
      console.log(error);
    }
  }

  // get a specific item from storage - pair of key and value
  getSingleItem = async () => {
    try{
      const WhatIgotBack = await AsyncStorage.getItem("Geography");
      if(WhatIgotBack !== (null || "")){
        const parsedRes = await JSON.parse(WhatIgotBack);
        alert(JSON.stringify(parsedRes));
      }
    }
    catch(error){
      console.log(error);
    }
  }

  // get all keys available in asyncStorage
  retrieveKeys = async () => {
    try{
      const keys = await AsyncStorage.getAllKeys();
      if(keys !== null){
        this.setState(()=> ({keys}))
        alert(JSON.stringify(this.state.keys));
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
        <Button title="clear storage" onPress={this.removeSingleItem}/>
        <Button title="get Single Item" onPress={this.getSingleItem}/>
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
