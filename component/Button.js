import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constant/Colors';

const Button = ({title, onPress = () => {}, iconname, lasticon}) => {
  return (
    <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent:"center" }}>
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{ borderRadius: 20, paddingVertical: 10, backgroundColor: "#66FF66", paddingHorizontal: 70, flexDirection: iconname || lasticon ? 'row' : 'column' }}>
      {iconname && <Icon name={iconname} style={{ color: Colors.black, fontSize: 18, padding: 5 }}/>}
      <Text style={{color: Colors.black, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
      {lasticon && <Icon name={lasticon} style={{ color: Colors.black, fontSize: 18, padding: 5 }}/>}
    </TouchableOpacity>
    </View>
  );
};

export default Button;