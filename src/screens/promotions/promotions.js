import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";

export default function PromotionsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Screen: promotion</Text>

      <TouchableHighlight onPress={() => navigation.navigate("Main")}>
        <Text>Go to home</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
