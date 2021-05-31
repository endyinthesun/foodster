import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigator from "_navigations";

import { Typo, Spacing, Colors, Mixins } from "_styles";

const { FONT_FAMILY_REGULAR } = Typo;
const { BG } = Colors;
const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    fontFamily: FONT_FAMILY_REGULAR,
    flex: 1,
    backgroundColor: BG,
  },
});

export default App;
