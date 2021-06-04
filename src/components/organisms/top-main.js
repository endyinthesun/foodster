import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

//styles
import { WHITE, BLUE, PRIMARY } from "@styles/colors";
import { FONT_SIZE_20, FONT_SIZE_16, FONT_FAMILY_BOLD } from "@styles/typography";
import { PADDING_HORIZONTAL } from "@styles/spacing";

//SVGs
import OnTheWayIcon from "@icons/on-the-way.svg";

//components
import { Logo, Location } from "@atoms";
import { SearchField } from "@molecules";

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
        <Logo />
        <OnTheWayIcon fill={PRIMARY} />
        <View>
          <Location city={city} />
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
  searchFieldContainer: {
    paddingHorizontal: PADDING_HORIZONTAL,
    marginTop: -24,
  },
});
