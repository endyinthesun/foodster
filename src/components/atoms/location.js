import React from "react";
import { Text, View, StyleSheet } from "react-native";

//SVG
import PinIcon from "@icons/pin.svg";

//styles
import { FONT_SIZE_16 } from "@styles/typography";
import { BLACK } from "@styles/colors";

export default function Location({ city, style }) {
  return (
    <View style={[styles.cityBlock, style]}>
      <PinIcon />
      <Text style={styles.cityText}>{city}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cityBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  cityText: {
    fontSize: FONT_SIZE_16,
    marginLeft: 6,
    textTransform: "capitalize",
    color: BLACK,
  },
});
