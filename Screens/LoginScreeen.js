import React, { useEffect, useState } from "react";
import { View, Button, Text, TextInput, StyleSheet, Alert, FlatList } from "react-native";

const LoginScreen = () => {
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://reqres.in/api/users")
        .then((resp) => resp.json())
        .then((json) => setData(json))
        .finally(() => console.log("api call"))
    }, [])

    console.warn("api data",data);
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={setUserId}
                placeholder={"Enter UserId"}
                value={userId}
            />
            <TextInput
                style={styles.textInputStyle}
                onChangeText={setPassword}
                placeholder={"Enter Password"}
                value={password}
            />
          <Button title="Submit" onPress={() => userId && password ? Alert.alert("You have Clicked on Submit button") : Alert.alert("please enter above details")} />
            <FlatList 
            data={data}
            renderItem={({item})=>{
                return(
                    <View style={{flex:1}}>
                    <Text>{item.key}</Text>
                </View>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    }
})

export default LoginScreen;