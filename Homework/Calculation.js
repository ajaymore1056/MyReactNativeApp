import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

class Calculation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      num1: 0,
      num2: 0,
      flag: false
    };
  }

  onPressItem = () => {
    var sum = this.state.num1 + this.state.num2;
    this.setState({ count: sum, flag: sum === 20 ? true : false });
  };
  render() {
    const { count, flag } = this.state;
    return (
      <View style={styles.firstView}>
        <TextInput
          style={styles.textinput}
          value={this.state.num1}
          onChangeText={v => this.setState({ num1: Number(v) })}
          placeholder="type number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textinput}
          value={this.state.num2}
          onChangeText={v => this.setState({ num2: Number(v) })}
          placeholder="type number"
          keyboardType="numeric"
        />
        <View style={styles.secondView}>
          <Button title="Calculate" onPress={this.onPressItem} />
          <Text>
            {count}
          </Text>
        </View>
        {flag &&
          <Text>
            total is {count}
          </Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  secondView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textinput: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10
  }
});

export default Calculation;
