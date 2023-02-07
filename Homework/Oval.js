import React, { Component } from "react";
import { Text, View } from "react-native";

class Oval extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "#FF9800",
            borderRadius: 120,
            borderWidth: 2,
            borderColor: "black",
            transform: [
              { scaleY: 2 } // oval drawing
            ]
          }}
        />
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "#FF9800",
            borderRadius: 120,
            borderWidth: 2,
            borderColor: "black",
            transform: [
              // { scaleX: 2 }, // oval drawing
              // { rotateY: "45deg" },
              { skewX: "45deg" }
            ]
          }}
        />
      </View>
    );
  }
}

export default Oval;
