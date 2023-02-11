import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from "../constant/Colors";

const Input = ({ label, iconName, error, password, onFocus = () => { }, ...props }) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={{ marginVertical: error ? 3 : 8 }}>
      <TextInput style={styles.input} 
        
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={hidePassword}
        {...props} />
      {password && (
        <Icon
          onPress={() => setHidePassword(!hidePassword)}
          name={hidePassword ? 'eye-off-outline' : 'eye-circle-outline' }
          style={{ color: Colors.darkBlue, fontSize: 22, position: "absolute", alignSelf: "flex-end", padding: 15 }}
        />
      )}
      <Text style={styles.textStyle}>{label}</Text>
      {error && (
        <Text style={{ marginTop: 7, color: Colors.red, fontSize: 12 }}>
          {error}
        </Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 25,
    backgroundColor: "#FFFFFF",
    paddingLeft: 5,
    paddingRight: 10,
    position: "absolute"
  },
  input: {
    height: 40,
    marginTop: 10,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
})

export default Input;