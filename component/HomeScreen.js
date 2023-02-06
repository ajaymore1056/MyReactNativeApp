import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import ApiIntegration from "./ApiIntegration";

const HomeScreen = () => {

  return (
    <View style={{ flex: 1, padding: 2 }}>
      <ApiIntegration/>
    </View>
  );
};
export default HomeScreen;