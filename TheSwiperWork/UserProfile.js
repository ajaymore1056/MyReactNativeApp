// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Button from '../component/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from "../constant/Colors";

const UserProfile = (props) => {

  const { navigation, route } = props;

  const { data } = route.params || {};
  const [userDetails, setUserDetails] = useState(JSON.parse(data));
  // const [infoHide, setInfoHide] = useState({
  //   firstName: '',
  //   lastName: '',
  //   mobileNum: '',
  //   emailId: '',
  // });
  const [hidePassword, setHidePassword] = useState(true);
  const [hidefn, setHidefn] = useState(true);
  const [hideln, setHideln] = useState(true);
  const [hideMn, setHidemn] = useState(true);
  const [hideED, setHideED] = useState(true);

  const { firstName, lastName, mobileNum, emailId, password } = userDetails;

  const qrCodePress =() =>{
    Alert.alert("Clicked on QR Code")
  }
  // const displayDataRow = (name, data, state) => {
  //   return (
  //     <View style={styles.rowView}>
  //       <Text style={{ alignSelf: 'center', fontSize:15, color:Colors.black }}>{name}</Text>
  //       <View style={styles.infoView}>
  //         {!infoHide && <Text>{data}</Text>}
  //         <Icon
  //           onPress={() => setInfoHide(!state)}
  //           name={state ? 'lock-outline' : 'lock-open-outline'}
  //           style={{ color: Colors.black, fontSize: 20, position: "absolute", alignSelf: "flex-end", padding:10 }}
  //         />
  //       </View>
  //     </View>
  //   )
  // }

  return (
    <View
      style={{
        flex: 1,
        padding: 40,
      }}>
      <Text style={{ alignSelf: "center", color: Colors.black, fontSize: 20, fontWeight: 'bold' }} > My Profile </Text>
      <View style={{ marginVertical: 10 }}>
        <Image></Image>
        <Button title="capture my image" onPress={() => navigation.navigate('RegisterForm')} iconname='camera' />
      </View>
      <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 10 }} onPress={qrCodePress}>
        <Icon name='share-variant'
          style={{ color: Colors.black, fontSize: 20, padding: 10 }}
        />
        <Text style={{ alignSelf: 'center', color: Colors.black }}>Share my profile details via Qr code</Text>
      </TouchableOpacity>
      <View style={styles.rowView}>
        <Text style={{ alignSelf: 'center', fontSize: 15, color: Colors.black }}>Registered first name</Text>
        <TouchableOpacity style={styles.infoView} onPress={() => setHidefn(!hidefn)}>
          {!hidefn && <Text>{firstName}</Text>}
          <Icon
            name={hidefn ? 'lock-outline' : 'lock-open-outline'}
            style={{ color: Colors.black, fontSize: 20, position: "absolute", alignSelf: "flex-end", padding: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <Text style={{ alignSelf: 'center', fontSize: 15, color: Colors.black }}>Registered last name</Text>
        <TouchableOpacity style={styles.infoView} onPress={() => setHideln(!hideln)}>
          {!hideln && <Text>{lastName}</Text>}
          <Icon

            name={hideln ? 'lock-outline' : 'lock-open-outline'}
            style={{ color: Colors.black, fontSize: 20, position: "absolute", alignSelf: "flex-end", padding: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <Text style={{ alignSelf: 'center', fontSize: 15, color: Colors.black }}>Registered mobile no</Text>
        <TouchableOpacity style={styles.infoView} onPress={() => setHidemn(!hideMn)}>
          {!hideMn && <Text>{mobileNum}</Text>}
          <Icon
            name={hideMn ? 'lock-outline' : 'lock-open-outline'}
            style={{ color: Colors.black, fontSize: 20, position: "absolute", alignSelf: "flex-end", padding: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <Text style={{ alignSelf: 'center', fontSize: 15, color: Colors.black }}>Registered E-mail ID</Text>
        <TouchableOpacity style={styles.infoView} onPress={() => setHideED(!hideED)}>
          {!hideED && <Text>{emailId}</Text>}
          <Icon
            name={hideED ? 'lock-outline' : 'lock-open-outline'}
            style={{ color: Colors.black, fontSize: 20, position: "absolute", alignSelf: "flex-end", padding: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <Text style={{ alignSelf: 'center', fontSize: 15, color: Colors.black }}>Registered Password</Text>
        <TouchableOpacity style={styles.infoView} onPress={() => setHidePassword(!hidePassword)}>
          {!hidePassword && <Text>{password}</Text>}
          <Icon
            name={hidePassword ? 'eye-circle-outline' : 'eye-off-outline'}
            style={{ color: Colors.grey, fontSize: 20, position: "absolute", alignSelf: "flex-end", padding: 10 }}
          />
        </TouchableOpacity>
      </View>
      {/* {displayDataRow("Registered first name", firstName, infoHide.firstName)}
      {displayDataRow("Registered last name", lastName, infoHide.lastName)}
      {displayDataRow("Registered mobile no", mobileNum, infoHide.mobileNum)}
      {displayDataRow("Registered E-mail ID", emailId, infoHide.emailId)}
      {displayDataRow("Registered Password", password, infoHide.password)} */}

    </View>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 10
  },
  infoView: {
    width: "50%",
    backgroundColor: "#E0E0E2",
    height: 40,
    borderRadius: 20,
    padding: 10
  }
})
export default UserProfile;

