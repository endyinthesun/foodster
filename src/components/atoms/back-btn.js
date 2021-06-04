import React from "react";
import { Pressable } from "react-native";

//SVGs
import Back from "@icons/back.svg";

export default function BackBtn({ onPress, style }) {
  return (
    <Pressable onPress={onPress} style={[{ height: "100%", justifyContent: "center" }, style]}>
      <Back />
    </Pressable>
  );
}
