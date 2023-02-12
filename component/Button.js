import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constant/Colors';

const Button = ({ title, onPress = () => { }, iconname, lasticon }) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[styles.touchableView, { flexDirection: iconname || lasticon ? 'row' : 'column' }]}>
        {iconname && <Icon name={iconname} style={{ color: Colors.black, fontSize: 18, padding: 5 }} />}
        <Text style={styles.textStyle}>
          {title}
        </Text>
        {lasticon && <Icon name={lasticon} style={{ color: Colors.black, fontSize: 18, padding: 5 }} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center"
  },
  touchableView: {
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: "#66FF66",
    paddingHorizontal: 50
  },
  textStyle: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18
  }
})
export default Button;