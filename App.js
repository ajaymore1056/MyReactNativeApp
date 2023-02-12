
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BlogProvider } from "./src/context/BlogContext";
import RegisterForm from "./TheSwiperWork/RegisterForm";
import UserProfile from "./TheSwiperWork/UserProfile";

const Stack = createNativeStackNavigator();

class App extends Component {
  // Main render function
  render() {
    return (
      <NavigationContainer>
          <BlogProvider>
            <Stack.Navigator initialRouteName="RegisterForm">
              <Stack.Screen name="RegisterForm" component={RegisterForm} />
              <Stack.Screen name="UserProfile" component={UserProfile} />
            </Stack.Navigator>
          </BlogProvider>
      </NavigationContainer>
    );
  }
}
export default App;


