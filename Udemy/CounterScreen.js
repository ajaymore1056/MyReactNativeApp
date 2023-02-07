import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
        <Button title="Increase" onPress={() => setCounter(counter + 1)}/>
        <Button title="Decrease" onPress={() => setCounter(counter - 1)}/>
        <Text style={{textAlign:'center'}}>counter value is {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default CounterScreen;
