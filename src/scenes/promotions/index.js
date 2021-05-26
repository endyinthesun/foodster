import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";

const PromotionsScreen = ({ navigation }) => (
  <SafeAreaView>
    <TouchableHighlight onPress={() => navigation.navigate("Main")}>
      <Text>Promotions</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default PromotionsScreen;
