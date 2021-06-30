import React, { useState } from "react";
import { Animated } from "react-native";
import { observer } from "mobx-react-lite";

//styles
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BG, BLACK, PRIMARY, SECONDARY, WHITE } from "@styles/colors";
import { FONT_FAMILY_REGULAR, FONT_FAMILY_SEMIBOLD, FONT_SIZE_13 } from "@styles/typography";

//store
import { filtersStore } from "@store/index";

export default observer(function Category({ title, type, clampedScroll }) {
  const capitalizeTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();
  let active = null;

  const isRestaurants = type === "restaurants";
  const isPlace = type === "place";

  const shadowOpacity = clampedScroll.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  if (isRestaurants) {
    active = filtersStore.dishFilter === title;
  }
  if (isPlace) {
    active = filtersStore.currentPlaceFilter === title;
  }
  const selectTypeScreenFilter = () => {
    if (isRestaurants) {
      filtersStore.changeDishFilter(title);
    } else if (isPlace) {
      filtersStore.changeCurrentPlaceFilter(title);
    } else {
      console.error("Wrong type of 'category.js'");
    }
  };

  return (
    <Animated.View
      style={[
        styles.dishContainer,
        {
          opacity: shadowOpacity,
          backgroundColor: active ? PRIMARY : WHITE,
        },
      ]}
    >
      <Pressable onPress={() => selectTypeScreenFilter()} style={styles.dish}>
        <Text
          style={[
            styles.dishText,
            {
              color: active ? WHITE : SECONDARY,
              fontFamily: active ? FONT_FAMILY_SEMIBOLD : FONT_FAMILY_REGULAR,
            },
          ]}
        >
          {capitalizeTitle}
        </Text>
      </Pressable>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  dishContainer: {
    shadowOpacity: 0.1,
    shadowColor: BLACK,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    borderRadius: 10,
    marginRight: 9,
    elevation: 5,
  },
  dish: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  dishText: {
    color: SECONDARY,
    fontSize: FONT_SIZE_13,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
