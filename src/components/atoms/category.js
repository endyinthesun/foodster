import React, { useState } from "react";
import { observer } from "mobx-react-lite";

//styles
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BG, PRIMARY, SECONDARY, WHITE } from "@styles/colors";
import { FONT_FAMILY_REGULAR, FONT_FAMILY_SEMIBOLD, FONT_SIZE_13 } from "@styles/typography";

//store
import { filters } from "@store/index";

export default observer(function Category({ title }) {
  const capitalizeTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();
  const active = filters.dishFilter === title;
  return (
    <View style={{ padding: 4 }}>
      <Pressable
        style={[styles.dishContainer, { backgroundColor: active ? PRIMARY : WHITE }]}
        onPress={() => filters.changeDishFilter(title)}
      >
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
    </View>
  );
});

const styles = StyleSheet.create({
  dishContainer: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  dishText: {
    color: SECONDARY,
    fontSize: FONT_SIZE_13,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
