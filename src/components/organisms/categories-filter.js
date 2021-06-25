import React from "react";

import { FlatList, StyleSheet, Text } from "react-native";

//components
import { Category } from "@atoms/index";

export default function CategoriesFilter({ content, type }) {
  const id = require("shortid");
  return (
    <FlatList
      contentContainerStyle={styles.dishesList}
      data={content}
      keyExtractor={() => id.generate()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Category title={item} type={type} />}
    />
  );
}

const styles = StyleSheet.create({
  dishesList: {
    marginTop: 14,
    flexDirection: "row",
  },
});
