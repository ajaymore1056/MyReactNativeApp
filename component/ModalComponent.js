import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constant/Colors';
import QRcodeComponent from '../TheSwiperWork/QRCode';
import CameraCode from '../TheSwiperWork/CameraCode';


const ModalComponent = ({navigation, title, subTitle, image, data, buttontitle, buttontitleSecond, buttonfirstIcon, buttonLasticon, onPress = () => { } }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerView}>
            <Text style={[styles.textStyle,{paddingLeft:data ? 15 : 2}]}>{title}</Text>
            <Icon name='backspace-outline' style={styles.iconStyle} onPress={image ? () => setModalVisible(!modalVisible) : onPress} />
          </View>
          {subTitle && <Text style={styles.modalText}>{subTitle}</Text>}
          {data && <QRcodeComponent info={data}/>}
          {image && <CameraCode />}
          {buttontitleSecond && <Button title={buttontitleSecond} lasticon={buttonLasticon} />}
          {buttontitle && <Button title={buttontitle} iconname={buttonfirstIcon} />}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 60
  },
  iconStyle: {
    color: Colors.black,
    fontSize: 20,
    alignSelf: "flex-end",
    padding: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    position: "absolute",
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  modalText: {
    margin: 15,
    alignSelf: 'center',
    color: 'black'
  },
});

export default ModalComponent;