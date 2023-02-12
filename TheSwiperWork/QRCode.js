
import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView, StyleSheet, Text,
    View
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

const QRcodeComponent = ({ info }) => {
    const [qrvalue, setQrvalue] = useState(info || {});

    const { firstName, lastName } = JSON.parse(qrvalue);

    //   const shareQRCode = () => {
    //     myQRCode.toDataURL((dataURL) => {
    //       console.log(dataURL);
    //       let shareImageBase64 = {
    //         title: 'React Native',
    //         url: `data:image/png;base64,${dataURL}`,
    //         subject: 'Share Link', //  for email
    //       };
    //       Share.share(shareImageBase64).catch((error) => console.log(error));
    //     });
    //   };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <QRCode
                    //QR code value
                    value={qrvalue ? qrvalue : 'NA'}
                    //size of QR Code
                    size={100}
                    //Color of the QR Code (Optional)
                    //   color="black"
                    //Background Color of the QR Code (Optional)
                    backgroundColor="white"
                    //Center Logo size  (Optional)
                    logoSize={40}
                    //Center Logo margin (Optional)
                    logoMargin={2}
                    //Center Logo radius (Optional)
                    logoBorderRadius={15}
                    //Center Logo background (Optional)
                    logoBackgroundColor="yellow"
                />
                <View style={styles.infoView}>
                    <Text>{firstName}</Text>
                </View>
                <View style={styles.infoView}>
                    <Text>{lastName}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    infoView: {
        width: "100%",
        backgroundColor: "#E0E0E2",
        // height: 40,
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
    },
})


export default QRcodeComponent;