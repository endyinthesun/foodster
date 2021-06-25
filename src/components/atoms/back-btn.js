import React from "react";
import { TouchableOpacity, View } from "react-native";

//SVGs
import Back from "@icons/back.svg";

export default function BackBtn({ onPress, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <Back />
    </TouchableOpacity>
  );
}
