import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";

export default function RestaurantsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Screen: RestaurantsScreen</Text>

      <TouchableHighlight onPress={() => navigation.navigate("Main")}>
        <Text>Go to home</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
