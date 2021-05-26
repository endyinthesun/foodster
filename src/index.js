import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RootNavigator from "_navigations";
import Home from "_icons/main.svg";

import { Typography, Spacing, Colors, Mixins } from "_styles";

const AuthStack = createBottomTabNavigator();
const { BLACK, PRIMARY } = Colors;
const { FONT_FAMILY_REGULAR, FONT_SIZE_16 } = Typography;
const App = () => {
  return (
    <View style={styles.container}>
      <RootNavigator />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    fontFamily: FONT_FAMILY_REGULAR,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default App;
