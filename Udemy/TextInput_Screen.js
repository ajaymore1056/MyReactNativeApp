import React,{Component, useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextInput_Screen = () =>{
    const [name, setName] = useState('')
    console.log(name)
    return(
        <View>
            {/* <Text>Enter Your Name : </Text> */}
            <TextInput 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect = {false}
            value = {name}
            onChangeText={(newValue) => setName(newValue)}
            />
            {name.length < 5 ? <Text> name should be five characters</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
})

export default TextInput_Screen;