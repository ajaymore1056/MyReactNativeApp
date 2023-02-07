import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

class TextinputFlatlist extends Component {
  state = {
    textInputs: []
  };

  render() {
    return (
      <View style={styles.mainView}>
        <FlatList
          style={{ flex: 1 }}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.flatlistView}>
                <TextInput
                  style={styles.textInpustStyle}
                  onChangeText={text => {
                    let { textInputs } = this.state;
                    textInputs[index] = text;
                    this.setState({
                      textInputs
                    });
                  }}
                  value={this.state.textInputs[index]}
                />
                <TouchableOpacity
                  style={styles.touchableSytle}
                  onPress={() => {
                    let { textInputs } = this.state;
                    textInputs[index] = "";
                    this.setState({
                      textInputs
                    });
                  }}
                >
                  <Text> Clear</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 20
  },
  flatlistView: {
    height: 100,
    backgroundColor: "#F0F0F0",
    width: 300,
    alignSelf: "center",
    margin: 10
  },
  textInpustStyle: {
    flex: 1,
    backgroundColor: "#C0C0C0"
  },
  touchableSytle: {
    backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TextinputFlatlist;
