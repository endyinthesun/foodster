import React from "react";
import { Pressable, View } from "react-native";

//SVGs
import Search from "@icons/search.svg";

export default function SearchBtn({ onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          height: "100%",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <View>
        <Search />
      </View>
    </Pressable>
  );
}
