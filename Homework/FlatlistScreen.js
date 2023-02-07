import { TabActions } from "@react-navigation/native";
import React, { Component } from "react";
import { FlatList, View, Text, Platform } from "react-native";
import RenderItem from "./RenderItem";

const dummyData = [
  {
    id: "1",
    userName: "Ajay More",
    time: "12:10 pm",
    message: "hii.",
    num: "2"
  },
  {
    id: "2",
    userName: "Arish Panjwani",
    time: "1:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "3",
    userName: "Nilesh Joge",
    time: "2:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "4",
    userName: "Faizan Qureshi",
    time: "3:50 pm",
    message: "Hiii",
    num: "3"
  },
  {
    id: "5",
    userName: "Malik Khoja",
    time: "4:50 pm",
    message: "Hello",
    num: "1"
  },
  {
    id: "6",
    userName: "Santosh Raut",
    time: "12:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "7",
    userName: "Arish Panjwani",
    time: "1:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "8",
    userName: "Nilesh Joge",
    time: "2:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "9",
    userName: "Faizan Qureshi",
    time: "3:50 pm",
    message: "Hello World",
    num: "14"
  },
  {
    id: "10",
    userName: "Atul Sharma",
    time: "4:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "11",
    userName: "Ajay More",
    time: "12:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "12",
    userName: "Arish Panjwani",
    time: "1:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "13",
    userName: "Nilesh Joge",
    time: "2:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "14",
    userName: "Faizan Qureshi",
    time: "3:50 pm",
    message: "Hello World",
    num: "1"
  },
  {
    id: "15",
    userName: "Atul Sharma",
    time: "4:50 pm",
    message: "Hello World",
    num: "1"
  }
];

class FlatlistScreen extends Component {
  renderItem = ({ item }) => {
    // const {id, userName, time, message, num} = item; // Destructuring array created for flatlist
    return (
      <RenderItem item={item} />
      // <View style={{marginVertical: 10, marginHorizontal: 30, flex: 1}}>
      //   <Text style={{fontWeight: 'bold'}}>{id}</Text>
      //   <Text>{userName}</Text>
      //   <Text>{time}</Text>
      //   <Text>{message}</Text>
      //   <Text>{num}</Text>
      // </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          numColumns={2}
          data={dummyData} // store the data required
          renderItem={item => this.renderItem(item)} //Passing the data required
          keyExtractor={item => item.id} // created unique id for the specified index and return the reordering by key
        />
      </View>
    );
  }
}

export default FlatlistScreen;
