

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';

// import CameraScreen
import { CameraScreen } from 'react-native-camera-kit';
import Button from '../component/Button';

const CameraCode = () => {
  const [isPermitted, setIsPermitted] = useState(false);
  const [captureImages, setCaptureImages] = useState([]);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const requestExternalWritePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  };

  const requestExternalReadPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Read Storage Permission',
          message: 'App needs Read Storage Permission',
        },
      );
      // If READ_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Read permission err', err);
    }
    return false;
  };

  const openCamera = async () => {
    if (Platform.OS === 'android') {
      if (await requestCameraPermission()) {
        if (await requestExternalWritePermission()) {
          if (await requestExternalReadPermission()) {
            setIsPermitted(true);
          } else alert('READ_EXTERNAL_STORAGE permission denied');
        } else alert('WRITE_EXTERNAL_STORAGE permission denied');
      } else alert('CAMERA permission denied');
    } else {
      setIsPermitted(true);
    }
  };
  const onBottomButtonPressed = (event) => {
    const images = JSON.stringify(event.captureImages);
    console.warn(event.type, images)
    if (event.type === 'left') {
      setIsPermitted(false);
    } else if (event.type === 'capture') {
      setIsPermitted(false);
      setCaptureImages(images);
    } else {
      Alert.alert(
        event.type,
        images,
        [{ text: 'data', onPress: () => console.log('OK Pressed') }],
        { cancelable: true },
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1}}>
      {isPermitted ? (
        <View style={{ flex: 1, position:'absolute' }}>
          <CameraScreen
            // Buttons to perform action done and cancel
            actions={{
              rightButtonText: 'Done',
              leftButtonText: 'Cancel'
            }}
            onBottomButtonPressed={
              (event) => onBottomButtonPressed(event)
            }
            flashImages={{
              // Flash button images
              on: require('../assets/flashon.png'),
              off: require('../assets/flashoff.png'),
              auto: require('../assets/flashauto.png'),
            }}
            cameraFlipImage={require('../assets/flip.png')}
            captureButtonImage={require('../assets/capture.png')}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>Your captured image</Text>
          <Text style={styles.textStyle}>{captureImages}</Text>
          <Button title={"Retake Another"} onPress={openCamera} lasticon={'refresh'}/>
        </View>
      )}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
});

export default CameraCode;
