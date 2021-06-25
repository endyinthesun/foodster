import React from "react";
import { TouchableOpacity } from "react-native";

//SVGs
import Info from "@icons/info.svg";

//store
import { othersStore } from "@store/index";

export default function InfoBtn({ style }) {
  return (
    <TouchableOpacity
      onPress={() => othersStore.toggleModalAbout(true)}
      style={[{ height: "100%", justifyContent: "center" }, style]}
    >
      <Info />
    </TouchableOpacity>
  );
}
