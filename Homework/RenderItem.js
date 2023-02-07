import React, { Component } from "react";
import { FlatList, View, Text, Platform } from "react-native";
const RenderItem = ({ item }) => {
  const { id, userName, time, message, num } = item; // Destructuring array created for flatlist
  return (
    <View style={{ marginVertical: 10, marginHorizontal: 30, flex: 1 }}>
      <Text style={{ fontWeight: "bold" }}>
        {id}
      </Text>
      <Text>
        {userName}
      </Text>
      <Text>
        {time}
      </Text>
      <Text>
        {message}
      </Text>
      <Text>
        {num}
      </Text>
    </View>
  );
};

export default RenderItem;
