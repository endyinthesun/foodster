import React, { useEffect, useState } from "react";
import { Keyboard, Platform, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

//navigation
import RootNavigator from "@navigations/index";

//styles
import { BG } from "@styles/colors";
import { FONT_FAMILY_REGULAR } from "@styles/typography";

export default function App() {
  const [loaded] = useFonts({
    SFUIDisplayBold: require("./assets/fonts/SFUIDisplay-Bold.ttf"),
    SFUIDisplayMedium: require("./assets/fonts/SFUIDisplay-Medium.ttf"),
    SFUIDisplayRegular: require("./assets/fonts/SFUIDisplay-Regular.ttf"),
    SFUIDisplaySemibold: require("./assets/fonts/SFUIDisplay-Semibold.ttf"),
  });

  if (!loaded) return null;
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
