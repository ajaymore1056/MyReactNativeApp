import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Colors from '../constant/Colors';

const Button = ({title, onPress = () => {}}) => {
  return (
    <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent:"center" }}>
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{ borderRadius: 20, paddingVertical: 10, backgroundColor: "#66FF66", paddingHorizontal: 70 }}>
      <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

export default Button;