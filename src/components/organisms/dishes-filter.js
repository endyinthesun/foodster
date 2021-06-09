import React from "react";

import { FlatList, Pressable, StyleSheet, Text } from "react-native";
import { PRIMARY, SECONDARY, WHITE } from "@styles/colors";
import { FONT_FAMILY_REGULAR, FONT_FAMILY_SEMIBOLD, FONT_SIZE_13 } from "@styles/typography";
import { DISHES_DATA } from "@assets/data";

//components
import { DishFilter } from "@atoms/index";

export default function DishesFilter() {
  const id = require("shortid");
  const dishData = [{ title: "All", id: id.generate() }, ...DISHES_DATA];
  return (
    <FlatList
      contentContainerStyle={styles.dishesList}
      data={dishData}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: { title } }) => <DishFilter title={title} />}
    />
  );
}

const styles = StyleSheet.create({
  dishesList: {
    marginTop: 14,
  },
});
