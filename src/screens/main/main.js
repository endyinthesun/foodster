import React from "react";
import { View, ScrollView } from "react-native";
import { Dishes, NewRestaurants, TopMain } from "@organisms/index";

export default function MainScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <TopMain city={"london"} />
      <Dishes type={"small"} {...props} />
      <NewRestaurants />
    </ScrollView>
  );
}
