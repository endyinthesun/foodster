import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";

const MainScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>

    <TouchableHighlight onPress={() => navigation.navigate("Main")}>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default MainScreen;
