import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
// import ImageSvg from "./ImageSvg";
import BankDetails from "./bank_details.svg";

class Button_Detail extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.styleicon}>
        <View>
          <Text>
            {this.props.title}
          </Text>
        </View>
        {this.props.svgicon === true &&
          <View>
            <BankDetails height={30} width={30} fill="orange" />
          </View>}
      </TouchableOpacity>
    );
  }
}

export default Button_Detail;
