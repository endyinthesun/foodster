import React from "react";
import { StyleSheet, Text, View } from "react-native";

//styles
import { FONT_FAMILY_BOLD, FONT_SIZE_20 } from "@styles/typography";
import { BLUE } from "@styles/colors";

export default function Logo({ style }) {
  return (
    <View style={style}>
      <Text style={styles.title}>Foodster</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_20,
    color: BLUE,
  },
});
