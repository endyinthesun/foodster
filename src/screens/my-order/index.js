import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";

const MyOrderScreen = ({ navigation }) => (
  <SafeAreaView>
    <TouchableHighlight onPress={() => navigation.navigate("Main")}>
      <Text>My order</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default MyOrderScreen;
