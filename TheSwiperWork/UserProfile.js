import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from '../component/Button';
const UserProfile = (props) => {

    const {navigation, route} = props;

    const {data} = route.params || {};
    console.warn("userprofile data",data)
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

//   console.warn("UserProfile",JsonData)
  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

//   const logout = () => {
//     AsyncStorage.setItem(
//       'userData',
//       JSON.stringify({...userDetails, loggedIn: false}),
//     );
//     navigation.navigate('RegisterForm');
//   };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Welcome {userDetails?.fullname}
      </Text>
      <Button title="Logout" onPress={() => navigation.navigate('RegisterForm')} />
    </View>
  );
};

export default UserProfile;

