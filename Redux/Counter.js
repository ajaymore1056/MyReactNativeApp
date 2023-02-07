import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addition, division, multiplication, substraction } from './Action';

const Counter = props => {
  const data = useSelector(state => state.mainReducer.counter);
  const data1 = useSelector(state => state.mainReducer1.number);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
      }}>
      <Button title="Addition" onPress={() => dispatch(addition())} />
      <Text> {data} </Text>
      {/* <Text> {data1} </Text> */}
      <Button title="Substraction" onPress={() => dispatch(substraction())} />
      <Button title="Division" onPress={() => dispatch(division())} />
      <Text> {data1} </Text>
      <Button
        title="Multiplication"
        onPress={() => dispatch(multiplication())}
      />
      <Button
        title="Go to NextScreen"
        onPress={data => navigation.navigate('NextScreen')}
      />
    </View>
  );
};

export default Counter;
