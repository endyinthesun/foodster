import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Screen: Login</Text>

      <TouchableHighlight onPress={() => navigation.navigate("Main")}>
        <Text>Go to home</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
