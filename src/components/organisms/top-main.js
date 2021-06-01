import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SearchField } from "_molecules";
import { Colors, Typo, Spacing } from "_styles";
import LinearGradient from "react-native-linear-gradient";

//SVGs
import PinIcon from "_icons/pin.svg";
import OnTheWayIcon from "_icons/on-the-way.svg";

//styles const
const { WHITE, BLUE, PRIMARY } = Colors;
const { FONT_SIZE_20, FONT_SIZE_16, FONT_FAMILY_BOLD } = Typo;
const { PADDING_HORIZONTAL } = Spacing;

export default function TopMain({ city }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <View>
      <LinearGradient
        colors={["#FFFDFD", "#FFEFEB", "#FFFFFF"]}
        locations={[0, 0.5, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.title}>Foodster</Text>
        <OnTheWayIcon fill={PRIMARY} />
        <View style={styles.cityBlock}>
          <PinIcon />
          <Text style={styles.cityText}>{city}</Text>
        </View>
      </LinearGradient>
      <View style={styles.searchFieldContainer}>
        <SearchField value={searchValue} updateSearch={setSearchValue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 180,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_20,
    color: BLUE,
  },
  cityBlock: {
    flexDirection: "row",
  },
  cityText: {
    fontSize: FONT_SIZE_16,
    marginLeft: 6,
    textTransform: "capitalize",
  },
  searchFieldContainer: {
    paddingHorizontal: PADDING_HORIZONTAL,
    marginTop: -24,
  },
});
