import React from "react";
import { observer } from "mobx-react-lite";

//styles
import { Pressable, StyleSheet, Text } from "react-native";
import { PRIMARY, SECONDARY, WHITE } from "@styles/colors";
import { FONT_FAMILY_REGULAR, FONT_FAMILY_SEMIBOLD, FONT_SIZE_13 } from "@styles/typography";

//store
import nav from "@store/navigation";

export default observer(function DishFilter({ title }) {
  const active = title === nav.filter;

  const activeStyles = StyleSheet.create({
    container: {
      backgroundColor: active ? PRIMARY : WHITE,
    },
    text: {
      color: active ? WHITE : SECONDARY,
      fontFamily: active ? FONT_FAMILY_SEMIBOLD : FONT_FAMILY_REGULAR,
    },
  });
  return (
    <Pressable
      style={[styles.dishContainer, activeStyles.container]}
      onPress={() => nav.changeFilter(title)}
    >
      <Text style={[styles.dishText, activeStyles.text]}>{title}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  dishContainer: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: WHITE,
    borderRadius: 10,
    marginRight: 8,
  },
  dishText: {
    color: SECONDARY,
    textTransform: "capitalize",
    fontSize: FONT_SIZE_13,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
