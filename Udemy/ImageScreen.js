import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ImageScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal:10
        }}>
        <View style={{height: 50, width: 50, backgroundColor: 'red', }} />
        <View style={{height: 50, width: 50, backgroundColor: 'blue'}} />
      </View>
      <View style={{flex:9}}>
      <Image source={require('./chair.jpg')} style={{height:"90%", width:"90%", marginHorizontal:20}}/>
      </View>
    </View>
  );
};

export default ImageScreen;