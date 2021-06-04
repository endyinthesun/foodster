import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

//SVGs
import SearchIcon from "@icons/search.svg";

//styles
import { WHITE } from "@styles/colors";
import { FONT_SIZE_16 } from "@styles/typography";

export default function SearchField({ value, updateSearch, style }) {
  const [query, setQuery] = useState(value);
  const onChangeText = (text) => {
    setQuery(text);
    updateSearch(text);
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={query}
        placeholder={"search restaurant, dish"}
        style={styles.textInput}
        onChangeText={onChangeText}
      />
      <View>
        <SearchIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    justifyContent: "space-between",
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: FONT_SIZE_16,
  },
});
