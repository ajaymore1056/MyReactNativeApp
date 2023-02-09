// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';
// import { Image } from 'react-native';
// import Calculation from './Homework/Calculation';
// import ChatScreen from './Screens/ChatScreen';
// import HomeScreen from './Screens/HomeScreen';
// import CounterScreen from './Udemy/CounterScreen';
// import DisributionRevenue from './Homework/DistributionRevenue';
// import FlexDimensionsBasics from './BasicsProgram/FlexDimensionsBasics';

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName=""
//         screenOptions={{
//           headerShown: false,
//           tabBarStyle: {position: 'absolute'},
//         }}>
//         <Tab.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: 'HomeScreen',
//             tabBarIcon: ({tintColor}) => (
//               <Image
//                 source={require('./homeIcon.png')}
//                 style={{width: 26, height: 26, tintColor: tintColor}}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="ChatScreen"
//           component={ChatScreen}
//           options={{
//             headerShown: true,
//             tabBarIcon: ({tintColor}) => (
//               <Image
//                 source={require('./chatIcon.jpeg')}
//                 style={{width: 26, height: 26, tintColor: tintColor}}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Calculation"
//           component={Calculation}
//           options={{
//             headerShown: true,
//             tabBarLabel: 'Calculator',
//             tabBarIcon: ({tintColor}) => (
//               <Image
//                 source={require('./calculatorIcon.webp')}
//                 style={{width: 26, height: 26, tintColor: tintColor}}
//               />
//             ),
//             tabBarBadge: 1,
//           }}
//         />
//         <Tab.Screen
//           name="Counterscreen"
//           component={CounterScreen}
//           options={{
//             headerShown: true,
//             tabBarLabel: 'Counter',
//             // tabBarBadge: 1,
//           }}
//         />
//         <Tab.Screen
//           name="DistributionRevenue"
//           component={DisributionRevenue}
//           options={{
//             headerShown: true,
//             tabBarLabel: 'DistributionView',
//             // tabBarBadge: 1,
//           }}
//         />
//         <Tab.Screen
//           name="FlexBasics"
//           component={FlexDimensionsBasics}
//           options={{
//             headerShown: true,
//             tabBarLabel: 'FlexBasics',
//             // tabBarBadge: 1,
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// export default  App;

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
// import FlexDimensionsBasics from "./BasicsProgram/FlexDimensionsBasics";
import Buttontoggle from "./Homework/Buttontoggle";
import Calculation from "./Homework/Calculation";
import DisributionRevenue from "./Homework/DistributionRevenue";
import FlatlistScreen from "./Homework/FlatlistScreen";
import MainScreen from "./Homework/MainScreen";
import Reausable_button from "./Homework/Reausable_button";
import SvgImage from "./Homework/SvgImage";
import ChatScreen from "./Screens/ChatScreen";
import HomeScreen from "./Screens/HomeScreen";
import BoxObjectLayout from "./Udemy/BoxObjectLayout";
import ColorScreen from "./Udemy/ColorScreen";
import CounterScreen from "./Udemy/CounterScreen";
import ImageScreen from "./Udemy/ImageScreen";
import SquareScreen from "./Udemy/SquareScreen";
import TextInput_Screen from "./Udemy/TextInput_Screen";
import WelcomeScreen from "./Udemy/WelcomeScreen";
import { Provider } from "react-redux";
import Counter from "./Redux/Counter";
import NextScreen from "./Redux/NextScreen";
import { store } from "./Redux/Store_";
import ImageBackground1 from "./Homework/ImageBackground1";
import Capsule from "./Homework/Capsule";
import Oval from "./Homework/Oval";
import Card_Screen from "./Homework/Card_Screen";
import Status from "./Homework/Status";
import QuickLinks from "./Homework/QuickLinks";
import IndexScreen from "./src/Screens/IndexScreen";
import ApplyIPoScreen from "./Homework/ApplyIPOScreen";
import RegisterForm from "./TheSwiperWork/RegisterForm";
import { BlogProvider } from "./src/context/BlogContext";

const Stack = createNativeStackNavigator();

class App extends Component {
  // Main render function
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <BlogProvider>
            <Stack.Navigator initialRouteName="MainScreen">
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="Addition" component={Calculation} />
              <Stack.Screen name="Counterscreen" component={CounterScreen} />
              <Stack.Screen
                name="Distribution Revenue"
                component={DisributionRevenue}
              />
              <Stack.Screen name="Colorscreen" component={ColorScreen} />
              <Stack.Screen name="SquareScreen" component={SquareScreen} />
              <Stack.Screen name="Toggle_Color" component={Buttontoggle} />
              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
              <Stack.Screen name="ViewImageScreen" component={ImageScreen} />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="ChatScreen" component={ChatScreen} />
              <Stack.Screen name="FlatListScreen" component={FlatlistScreen} />
              <Stack.Screen
                name="ReausableButton"
                component={Reausable_button}
              />
              <Stack.Screen
                name="TextInput_Screen"
                component={TextInput_Screen}
              />
              <Stack.Screen name="SvgImage" component={SvgImage} />
              <Stack.Screen name="Go to Styling" component={BoxObjectLayout} />
              <Stack.Screen name="Counter Redux" component={Counter} />
              <Stack.Screen name="NextScreen" component={NextScreen} />
              <Stack.Screen
                name="ImageBackground"
                component={ImageBackground1}
              />
              <Stack.Screen name="Oval" component={Oval} />
              <Stack.Screen name="Capsule" component={Capsule} />
              <Stack.Screen name="CardScreen" component={Card_Screen} />
              <Stack.Screen name="StatusScreen" component={Status} />
              <Stack.Screen name="QuickLinksScreen" component={QuickLinks} />
              <Stack.Screen name="IndexScreen" component={IndexScreen} />
              <Stack.Screen name="RegisterForm" component={RegisterForm} />
              <Stack.Screen name="ApplyIPoScreen" component={ApplyIPoScreen} />
            </Stack.Navigator>
          </BlogProvider>
        </Provider>
      </NavigationContainer>
    );
  }
}
export default App;
