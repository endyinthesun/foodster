import React from "react";

import { FlatList, StyleSheet, Text, View, Animated } from "react-native";

//components
import { Category } from "@atoms/index";

export default function CategoriesFilter({ content, type, clampedScroll }) {
  const id = require("shortid");

  //scroll animation
  const categoriesTranslate = clampedScroll.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -60],
    extrapolate: "clamp",
  });
  const categoriesOpacity = clampedScroll.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={{
        transform: [
          {
            translateY: categoriesTranslate,
          },
        ],
        opacity: categoriesOpacity,
      }}
    >
      <FlatList
        contentContainerStyle={styles.dishesList}
        data={content}
        keyExtractor={() => id.generate()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Category title={item} type={type} />}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  dishesList: {
    marginTop: 14,
    flexDirection: "row",
  },
});
