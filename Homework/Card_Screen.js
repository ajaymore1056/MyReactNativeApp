import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

class Card_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      To: "",
      from: "",
      message: " "
    };
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "#FF000009",
            borderWidth: 1,
            height: 250,
            width: 300,
            borderRadius: 10,
            shadowColor: "blue",
            shadowRadius: 1,
            shadowOpacity: 0.5,
            shadowOffset: { width: 1, height: 3 },
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 250,
              marginVertical: 20
            }}
          >
            <View>
              <Text style={{ marginLeft: 5 }}> To,</Text>
              <TextInput
                style={{ marginLeft: 10, width: 60, borderBottomWidth: 1 }}
                value={this.state.To}
                multiline={true}
                onChangeText={newTo => this.setState({ To: newTo })}
              />
            </View>
            <View>
              <Text style={{ marginRight: 50 }}> From,</Text>
              <TextInput
                style={{ marginLeft: 10, width: 70, borderBottomWidth: 1 }}
                multiline={true}
                value={this.state.from}
                onChangeText={newTo => this.setState({ from: newTo })}
              />
            </View>
          </View>
          <View>
            <TextInput
              style={styles.messagestyle}
              value={this.state.message}
              autoCorrect={false}
              multiline={true}
              onChangeText={newmessage =>
                this.setState({
                  message: newmessage
                })}
            />
            <TextInput style={styles.messagestyle} />

            <TextInput style={styles.messagestyle} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messagestyle: {
    // borderWidth: 1,
    alignSelf: "center",
    paddingTop: 10,
    width: 230,
    borderBottomWidth: 1
  }
});
export default Card_Screen;

// import React, { useState } from "react";
// import { Text, View, StyleSheet, Slider } from "react-native";

// const ShadowPropSlider = ({ label, value, ...props }) => {
//   return (
//     <>
//       <Text>
//         {label} ({value.toFixed(2)})
//       </Text>
//       <Slider step={1} value={value} {...props} />
//     </>
//   );
// }

// const Card_Screen = () => {
//   const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
//   const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
//   const [shadowRadius, setShadowRadius] = useState(0);
//   const [shadowOpacity, setShadowOpacity] = useState(0.1);

//   return (
//     <View style={styles.container}>
//       <View
//         style={[
//           styles.square,
//           {
//             shadowOffset: {
//               width: shadowOffsetWidth,
//               height: -shadowOffsetHeight
//             },
//             shadowOpacity,
//             shadowRadius
//           }
//         ]}
//       />
//       <View style={styles.controls}>
//         <ShadowPropSlider
//           label="shadowOffset - X"
//           minimumValue={-50}
//           maximumValue={50}
//           value={shadowOffsetWidth}
//           onValueChange={val => setShadowOffsetWidth(val)}
//         />
//         <ShadowPropSlider
//           label="shadowOffset - Y"
//           minimumValue={-50}
//           maximumValue={50}
//           value={shadowOffsetHeight}
//           onValueChange={val => setShadowOffsetHeight(val)}
//         />
//         <ShadowPropSlider
//           label="shadowRadius"
//           minimumValue={0}
//           maximumValue={100}
//           value={shadowRadius}
//           onValueChange={val => setShadowRadius(val)}
//         />
//         <ShadowPropSlider
//           label="shadowOpacity"
//           minimumValue={0}
//           maximumValue={1}
//           step={0.05}
//           value={shadowOpacity}
//           onValueChange={val => setShadowOpacity(val)}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-around",
//     backgroundColor: "#ecf0f1",
//     padding: 8
//   },
//   square: {
//     alignSelf: "center",
//     backgroundColor: "white",
//     borderRadius: 4,
//     height: 150,
//     shadowColor: "black",
//     width: 150
//   },
//   controls: {
//     paddingHorizontal: 12
//   }
// });

// export default car;
