import React, { Component } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";

class MainScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Addition")}
          >
            <Text>Go to Addition Screen </Text>
          </TouchableOpacity>
          <Button
            title="Go to CounterScreen"
            onPress={() => this.props.navigation.navigate("Counterscreen")}
          />
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Distribution Revenue")}
          >
            <Text> Go to DisributionRevenue Screen </Text>
          </TouchableOpacity>
          <Button
            title="Go to Colorscreen"
            onPress={() => this.props.navigation.navigate("Colorscreen")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SquareScreen")}
          >
            <Text> Go to SquareScreen </Text>
          </TouchableOpacity>
          <Button
            title=" Go to Toggle_Color Screen"
            onPress={() => this.props.navigation.navigate("Toggle_Color")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("WelcomeScreen")}
          >
            <Text>Go to WelcomeScreen </Text>
          </TouchableOpacity>
          <Button
            title="Go to ViewImageScreen"
            onPress={() => this.props.navigation.navigate("ViewImageScreen")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomeScreen")}
          >
            <Text> Go to HomeScreen </Text>
          </TouchableOpacity>
          <Button
            title="Go to ChatScreen"
            onPress={() => this.props.navigation.navigate("ChatScreen")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("FlexDiemension")}
          >
            <Text> Go to FlexDiemension Screen </Text>
          </TouchableOpacity>
          <Button
            title="Go to FlatListScreen"
            onPress={() => this.props.navigation.navigate("FlatListScreen")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ReausableButton")}
          >
            <Text> Go to ReausableButtonScreen </Text>
          </TouchableOpacity>
          <Button
            title="Go to TextInput_Screen"
            onPress={() => this.props.navigation.navigate("TextInput_Screen")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SvgImage")}
          >
            <Text>Go to SvgImage Screen</Text>
          </TouchableOpacity>
          <Button
            title="Go to Styling Screen"
            onPress={() => this.props.navigation.navigate("Go to Styling")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Go to Redux")}
          >
            <Text> Go to Redux Screen </Text>
          </TouchableOpacity>
          <Button
            title="Go to RegisterFormScreen"
            onPress={() => this.props.navigation.navigate("RegisterForm")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Counter Redux")}
          >
            <Text> Go to Counter Screen </Text>
          </TouchableOpacity>
          <Button
            title="Go to NextScreen"
            onPress={() => this.props.navigation.navigate("NextScreen")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ImageBackground")}
          >
            <Text> Go to ImageBackground screen </Text>
          </TouchableOpacity>
          <Button
            title="Go to Oval screen"
            onPress={() => this.props.navigation.navigate("Oval")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Capsule")}
          >
            <Text> Go to Capsule screen </Text>
          </TouchableOpacity>
          <Button
            title="Go to CardScreen"
            onPress={() => this.props.navigation.navigate("CardScreen")}
          />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("StatusScreen")}
          >
            <Text> Go to Status screen </Text>
          </TouchableOpacity>
          <Button
            title="Go to QuickLinksScreen"
            onPress={() => this.props.navigation.navigate("QuickLinksScreen")}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("IndexScreen")}
          >
            <Text> Go to IndexScreen screen </Text>
          </TouchableOpacity>
          <Button
            title="Go to ApplyIPoScreen"
            onPress={() => this.props.navigation.navigate("ApplyIPoScreen")}
          />
        </View>
      </ScrollView>
    );
  }
}

export default MainScreen;
