import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };
class ImageBackground1 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 30,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View>
              <View style={styles.Square} />
              <View style={styles.circle} />
            </View>
            <View style={styles.Triangle} />
            <View style={styles.Reactangle} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  Square: {
    height: 100,
    width: 100,
    backgroundColor: "white"
  },
  Reactangle: {
    height: 70,
    width: 70 * 2,
    backgroundColor: "green",
    position: "absolute"
    // top: 100
  },
  Triangle: {
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    marginLeft: 20,
    marginBottom: 50
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginVertical: 30,
    // marginHorizontal: 10,
    backgroundColor: "white"
  }
});

export default ImageBackground1;
