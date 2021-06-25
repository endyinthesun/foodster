import React from "react";
import { View, ScrollView } from "react-native";
import { Dishes, NewRestaurants, HeaderMain } from "@organisms/index";

export default function MainScreen(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <HeaderMain city={"london"} />
      <Dishes type={"small"} {...props} />
      <NewRestaurants amount={4} {...props} />
    </ScrollView>
  );
}
