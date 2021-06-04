import React from "react";
import { Pressable } from "react-native";

//SVGs
import Info from "@icons/info.svg";

export default function InfoBtn({ onPress, style }) {
  return (
    <Pressable onPress={onPress} style={[{ height: "100%", justifyContent: "center" }, style]}>
      <Info />
    </Pressable>
  );
}
