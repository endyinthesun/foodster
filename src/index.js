import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RootNavigator from "_navigations";

import { Typography, Spacing, Colors, Mixins } from "_styles";

const { FONT_FAMILY_REGULAR } = Typography;
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
  },
});

export default App;
