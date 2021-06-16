import React from "react";

import { FlatList, StyleSheet, Text } from "react-native";
import { DISHES_DATA } from "@assets/data";

//components
import { Category } from "@atoms/index";

export default function Categories({ content }) {
  return (
    <FlatList
      contentContainerStyle={styles.dishesList}
      data={content}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: { title } }) => <Category title={title} />}
    />
  );
}

const styles = StyleSheet.create({
  dishesList: {
    marginTop: 14,
    flexDirection: "row",
  },
});
