import React, { useState } from "react";
import { observer } from "mobx-react-lite";

//styles
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BG, PRIMARY, SECONDARY, WHITE } from "@styles/colors";
import { FONT_FAMILY_REGULAR, FONT_FAMILY_SEMIBOLD, FONT_SIZE_13 } from "@styles/typography";

const OptionalFilter = observer(({ title, activeOptional, addArrElements, remArrElements }) => {
  const [toggleFilter, setToggleFilter] = useState(activeOptional);
  const capitalizeTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();

  return (
    <View style={{ padding: 4 }}>
      <Pressable
        style={[styles.dishContainer, { backgroundColor: toggleFilter ? PRIMARY : BG }]}
        onPress={() => {
          setToggleFilter(!toggleFilter);
          if (!toggleFilter) {
            addArrElements(title);
          } else {
            remArrElements(title);
          }
        }}
      >
        <Text
          style={[
            styles.dishText,
            {
              color: toggleFilter ? WHITE : SECONDARY,
              fontFamily: toggleFilter ? FONT_FAMILY_SEMIBOLD : FONT_FAMILY_REGULAR,
            },
          ]}
        >
          {capitalizeTitle}
        </Text>
      </Pressable>
    </View>
  );
});

export default OptionalFilter;

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
