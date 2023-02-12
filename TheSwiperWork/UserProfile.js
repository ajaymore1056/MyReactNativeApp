// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../component/Button';
import ModalComponent from '../component/ModalComponent';
import Colors from "../constant/Colors";

const UserProfile = (props) => {

  const { navigation, route } = props;

  const { data } = route.params || {};
  const [userDetails, setUserDetails] = useState(data || {});
  const [hidePassword, setHidePassword] = useState(true);
  const [hidefn, setHidefn] = useState(true);
  const [hideln, setHideln] = useState(true);
  const [hideMn, setHidemn] = useState(true);
  const [hideED, setHideED] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [cameraModal, setCameraModal ] = useState(false);


  const { firstName, lastName, mobileNum, emailId, password } = JSON.parse(userDetails) || {};

  return (
    <View
      style={{
        flex: 1,
        padding: 40,
      }}>
      <Text style={{ alignSelf: "center", color: Colors.black, fontSize: 20, fontWeight: 'bold' }} > My Profile </Text>
      <View style={{ marginVertical: 10 }}>
      <View style={{alignSelf:'center',width:100, height:80, borderWidth:1, borderColor:"black"}}/>
        <Button title="capture my image" onPress={() => setCameraModal(!cameraModal)} iconname='camera'/>
        {cameraModal &&
          <ModalComponent
            title={'My Profile Pictures'}
            buttontitleSecond={'Submit'}
            buttonLasticon={'arrow-right'}
            onPress={() => setModalVisible(!cameraModal)}
            image={'camera'}
            navigation={navigation}
            />}
      </View>
      <TouchableOpacity style={styles.iconpress} onPress={() => setModalVisible(!modalVisible)}>
        <Icon name='share-variant'
          style={{ color: Colors.black, fontSize: 20, padding: 10 }}
        />
        <Text style={{ alignSelf: 'center', color: Colors.black }}>Share my profile details via Qr code</Text>
        {modalVisible &&
          <ModalComponent
            title={'My QR Code'}
            subTitle={'Registered user first and Last name'}
            buttontitle={'Share my profile'}
            buttonfirstIcon={'share-variant'}
            onPress={() => setModalVisible(!modalVisible)}
            data={userDetails} 
            />}
      </TouchableOpacity>
      <View style={styles.rowView}>
        <Text style={styles.textStyleinfo}>Registered first name</Text>
        <TouchableOpacity style={styles.infoView} onPress={() => setHidefn(!hidefn)}>
          {!hidefn && <Text>{firstName}</Text>}
          <Icon
            name={hidefn ? 'lock-outline' : 'lock-open-outline'}
            style={styles.iconSytle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.textStyleinfo}>Registered last name</Text>
        <TouchableOpacity style={styles.infoView} onPress={() => setHideln(!hideln)}>
          {!hideln && <Text>{lastName}</Text>}
          <Icon
            name={hideln ? 'lock-outline' : 'lock-open-outline'}
            style={styles.iconSytle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.textStyleinfo}>Registered mobile no</Text>
        <TouchableOpacity style={styles.infoView} onPress={() => setHidemn(!hideMn)}>
          {!hideMn && <Text>{mobileNum}</Text>}
          <Icon
            name={hideMn ? 'lock-outline' : 'lock-open-outline'}
            style={styles.iconSytle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.textStyleinfo}>Registered E-mail ID</Text>
        <TouchableOpacity style={styles.infoView} onPress={() => setHideED(!hideED)}>
          {!hideED && <Text>{emailId}</Text>}
          <Icon
            name={hideED ? 'lock-outline' : 'lock-open-outline'}
            style={styles.iconSytle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.textStyleinfo}>Registered Password</Text>
        <TouchableOpacity style={styles.infoView} onPress={() => setHidePassword(!hidePassword)}>
          {!hidePassword && <Text>{password}</Text>}
          <Icon
            name={hidePassword ? 'eye-off-outline' : 'eye-circle-outline'}
            style={styles.iconSytle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconpress: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 10
  },
  textStyleinfo: {
    alignSelf: 'center',
    fontSize: 15,
    color: Colors.black
  },
  infoView: {
    width: "50%",
    backgroundColor: "#E0E0E2",
    height: 40,
    borderRadius: 20,
    padding: 10
  },
  iconSytle: {
    color: Colors.black,
    fontSize: 20,
    position: "absolute",
    alignSelf: "flex-end",
    padding: 10
  }
})
export default UserProfile;

