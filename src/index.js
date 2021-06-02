import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//navigation
import RootNavigator from "@navigations";

//styles
import { Typo, Spacing, Colors, Mixins } from "@styles";

//styles value
const { FONT_FAMILY_REGULAR } = Typo;
const { BG } = Colors;

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: FONT_FAMILY_REGULAR,
    flex: 1,
    backgroundColor: BG,
  },
});
