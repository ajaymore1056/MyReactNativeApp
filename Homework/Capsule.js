import React, { Component } from "react";
import { Text, View } from "react-native";

class Capsule extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            // marginTop: 100,
            width: 100,
            height: 130,
            backgroundColor: "#FF000055",
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
            borderWidth: 1,
            borderColor: "black",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text> D </Text>
        </View>
        <View
          style={{
            // marginTop: 128,
            width: 95,
            height: 130,
            backgroundColor: "#D1D10066",
            borderBottomEndRadius: 100,
            borderBottomStartRadius: 100,
            borderWidth: 1,
            borderColor: "black",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>D</Text>
        </View>
      </View>
    );
  }
}

export default Capsule;
