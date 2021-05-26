import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";

const RestaurantsScreen = ({ navigation }) => (
  <SafeAreaView>
    <TouchableHighlight onPress={() => navigation.navigate("Main")}>
      <Text>Restaurants</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default RestaurantsScreen;
