import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, Typo } from "@styles";

//Styles value
const { PRIMARY, WHITE } = Colors;
const { FONT_SIZE_16, FONT_FAMILY_SEMIBOLD } = Typo;

export default function Product({}) {
  return <View></View>;
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: PRIMARY,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
  },
});
