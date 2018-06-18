/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RNImagePicker from 'react-native-image-picker';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';



export default class App extends Component<Props> {
  state ={
    uri: ""
  };

  openPicker = () => {
  RNImagePicker.showImagePicker({}, res => {
    if (res.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (res.error) {
    console.log('ImagePicker Error: ', res.error);
  }
  else {
    let source = { uri: res.uri };
    this.setState(source);
  }
  });
  };

  upload = () => {};
  render() {
    return (
      <View style={styles.container}>
      <Image source={{ uri: this.state.uri }} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={this.openPicker}>
        <Text>open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={this.openPicker}>
        <Text>open</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: "red"
  },
  button: {
    padding: 20,
  }
});
