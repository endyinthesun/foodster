import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { registerRootComponent } from "expo";

//navigation
import RootNavigator from "@navigations/index";

//styles
import { BG } from "@styles/colors";
import { FONT_FAMILY_REGULAR } from "@styles/typography";

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

// registerRootComponent(App);
