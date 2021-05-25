import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Greeting } from "_atoms";
import RootNavigator from "_navigations";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <View>
      <RootNavigator />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
