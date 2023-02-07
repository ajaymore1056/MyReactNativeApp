import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
// import ImageSvg, { BankDetails } from "./ImageSvg";
import BankDetails from "./bank_details.svg";

class SvgImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "skyblue"
          }}
        >
          <BankDetails
            height={50}
            width={50}
            fill="#0000FF"
            style={{ marginEnd: 50 }}
          />
          <Text>Image</Text>
          <BankDetails height={20} width={20} fill="#00FF00" />
        </View>
        <ImageSvg height={80} width={80} fill="#FF0000" />
        <View style={{ flexDirection: "row" }}>
          <BankDetails height={50} width={50} fill="#FF00FF" />
          <BankDetails
            height={50}
            width={50}
            fill="#00FFF0"
            style={{ marginStart: 50 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default SvgImage;
