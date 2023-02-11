import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput,Keyboard, TouchableOpacity, View } from 'react-native';
import Button from '../component/Button';
import Input from '../component/Input';

const RegisterForm = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    firstName: '',
    lastName: '',
    mobileNum: '',
    emailId: '',
    password: '',
    confirmPassword: '',
  });
  const [icon, setIcon] = useState(false);
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);


  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.emailId) {
      handleError('Please input emailId', 'emailId');
      isValid = false;
    } else if (!inputs.emailId.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid emailId', 'emailId');
      isValid = false;
    }

    if (!inputs.firstName) {
      handleError('Please input firstName', 'firstName');
      isValid = false;
    }
    if (!inputs.lastName) {
      handleError('Please input lastname', 'lastName');
      isValid = false;
    }

    if (!inputs.mobileNum) {
      handleError('Please input mobile number', 'mobileNum');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }
    if(inputs.confirmPassword !== inputs.password){
      handleError('Password is not match', 'confirmPassword');
      isValid = false;
    }
    if(!icon){
      Alert.alert("Please Acceept terms and Condition")
    }

    if (isValid) {
      onPressSubmit();
    }
  };

  const onPressSubmit = () => {
    const data = JSON.stringify(inputs);
    // console.warn(data);
    setLoading(true);
    navigation.navigate("UserProfile", {data});
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };


  return (
    <View>
      <View style={{ justifyContent: 'center', alignItems: 'center', margin: 30 }}>
        <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}> Register Now </Text>
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <Input
          onChangeText={text => handleOnchange(text, 'firstName')}
          onFocus={() => handleError(null, 'firstName')}
          label="First Name"
          error={errors.firstName}
        />
        <Input
          onChangeText={text => handleOnchange(text, 'lastName')}
          onFocus={() => handleError(null, 'lastName')}
          label="Last Name"
          error={errors.lastName}
        />
        <Input
          keyboardType="numeric"
          onChangeText={text => handleOnchange(text, 'mobileNum')}
          onFocus={() => handleError(null, 'mobileNum')}
          label="Mobile no"
          error={errors.mobileNum}
        />
        <Input
          onChangeText={text => handleOnchange(text, 'emailId')}
          onFocus={() => handleError(null, 'emailId')}
          label="E-mail ID"
          error={errors.emailId}
        />
        <Input
          onChangeText={text => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          label="Password"
          error={errors.password}
          password
        />
        <Input
          onChangeText={text => handleOnchange(text, 'confirmPassword')}
          onFocus={() => handleError(null, 'confirmPassword')}
          iconName="lock-outline"
          label="Confirm Password"
          error={errors.confirmPassword}
        />
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

      <Button title="Submit" onPress={validate} lasticon='arrow-right'/>
    </View>
  );
}

const styles = StyleSheet.create({
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
})

export default RegisterForm;
