import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";

const MainScreen = ({ navigation }) => (
  <SafeAreaView>
    <TouchableHighlight onPress={() => navigation.navigate("Main")}>
      <Text>Main</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default MainScreen;
