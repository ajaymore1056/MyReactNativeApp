import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]); // initial value is empty array
  //   console.log(colors);    checking the colors on screes
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Add color"
        onPress={() => {
          setColors([...colors, randomRGB()]); // we store the random colors in array
        }}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => {
          return (
            <View style={{height: 100, width: 100, backgroundColor: item}} />
          );
        }}
      />
    </View>
  );
};

// we created function for generating random colors
const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`; // It's used to reference a variable within string: template literal
};

const styles = StyleSheet.create({});

export default ColorScreen;
