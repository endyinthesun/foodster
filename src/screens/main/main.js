import React from "react";
import { View, ScrollView } from "react-native";
import { TopMain, Places } from "@organisms";

export default function MainScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <TopMain city={"london"} />
      <Places type={"small"} {...props} />
    </ScrollView>
  );
}
