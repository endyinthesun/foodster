import React from "react";

import { FlatList, StyleSheet, Text, View, Animated } from "react-native";

//components
import { Category } from "@atoms/index";
import { PADDING_HORIZONTAL } from "@styles/spacing";

export default function CategoriesFilter({ content, type, clampedScroll }) {
  const id = require("shortid");

  //scroll animation
  const categoriesTranslate = clampedScroll.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -100],
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
        paddingLeft: PADDING_HORIZONTAL - 5,
      }}
    >
      <FlatList
        contentContainerStyle={styles.dishesList}
        data={content}
        keyExtractor={() => id.generate()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Category title={item} type={type} clampedScroll={clampedScroll} />
        )}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  dishesList: {
    marginTop: 14,
    flexDirection: "row",
    paddingVertical: 5,
    paddingLeft: 5,
  },
});
