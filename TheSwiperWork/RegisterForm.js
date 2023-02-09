import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const RegisterForm = (props) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobileNum, setMobileNum] = useState();
  const [emailId, setEmailId] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [icon, setIcon] = useState(false);


  const onPressSubmit = () => {
    
  }

  return (
    <View>
      <View style={{ justifyContent: 'center', alignItems: 'center', margin: 30 }}>
        <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}> Register Now </Text>
      </View>
      <View style={{ marginHorizontal: 25 }}>
        <View style={styles.viewTexInput}>
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            value={firstName}
          // keyboardType="numeric"
          />
          <Text style={styles.textStyle}>First Name</Text>
        </View>
        <View style={styles.viewTexInput}>
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            value={lastName}
          />
          <Text style={styles.textStyle}>Last Name</Text>
        </View>
        <View style={styles.viewTexInput}>
          <TextInput
            style={styles.input}
            onChangeText={setMobileNum}
            value={mobileNum}
          />
          <Text style={styles.textStyle}>Mobile No</Text>
        </View>
        <View style={styles.viewTexInput}>
          <TextInput
            style={styles.input}
            onChangeText={setEmailId}
            value={emailId}
          />
          <Text style={styles.textStyle}>E-mail ID</Text>
        </View>
        <View style={styles.viewTexInput}>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />
          <Text style={styles.textStyle}>Password</Text>
        </View>
        <View style={styles.viewTexInput}>
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <Text style={styles.textStyle}>Confirm Password</Text>
        </View>
        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setIcon(!icon)}>
            <View style={styles.iconView}>
              {icon && <Image
                source={require("./Tick.png")} // display the image using path
                style={styles.circle}
              />}
            </View>
          </TouchableOpacity>
          <Text style={{ paddingLeft: 10 }}>I agree to terms and conditions</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <TouchableOpacity style={{ borderRadius: 20, paddingVertical: 10, backgroundColor: "#66FF66", paddingHorizontal: 70 }} onPress={() => Alert.alert("Submit Button click")}>
          <Text color={"black"} style={{ fontSize: 15, fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewTexInput: {
    margin: 10,
  },
  iconView: {
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#E0E0E2"
  },
  circle: {
    width: 20,
    height: 20,
    alignSelf: "center"
  },
  textStyle: {
    marginLeft: 25,
    backgroundColor: "#",
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

export default RegisterForm;
