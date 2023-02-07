import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';

const NextScreen=(props)=> {
const data = useSelector(state => state.mainReducer.counter);
const data1 = useSelector(state => state.mainReducer1.number);

// const dispatch = useDispatch();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {/* <Button title="Addition" onPress={() => dispatch(addition())} />  */}
      <Text> this state counter: {data}</Text>
      <Text> this state Number: {data1}</Text>
      {/* <Button title="Substraction" onPress={() => dispatch(substraction())} />  */}
    </View>
  );
}

export default  NextScreen;
