import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import {ImageBackground} from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: '80%', width: '100%'}}>
          <ImageBackground
            source={require('./background.jpg')}
            style={{width: '100%', height: '100%', alignItems: 'center'}}>
            <Image
              source={require('./logo-red.png')}
              style={{height: 100, width: 100, marginTop: 40}}></Image>
            <Text>Sell what you Don't need</Text>
          </ImageBackground>
        </View>
        <View
          style={{height: '10%', width: '100%', backgroundColor: '#fc5c65'}}
        />
        <View
          style={{height: '10%', width: '100%', backgroundColor: '#4ECDC4'}}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
