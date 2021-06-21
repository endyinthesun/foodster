import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Screen: Profile</Text>

      <TouchableHighlight onPress={() => navigation.navigate("Main")}>
        <Text>Go to home</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
