import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BG, BLACK, BLUE, PRIMARY } from "@styles/colors";
import { FONT_FAMILY_REGULAR, FONT_SIZE_16 } from "@styles/typography";

import Check from "@icons/check.svg";

export default function CheckboxFilter({ title, addArrElements, remArrElements, active }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(active);
  const setLol = () => {
    setToggleCheckBox(!toggleCheckBox);
    if (!toggleCheckBox) {
      addArrElements(title);
    } else {
      remArrElements(title);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginRight: 12 }} onPress={() => setLol()}>
        <View style={[styles.checkBox, { backgroundColor: toggleCheckBox ? PRIMARY : BG }]}>
          {toggleCheckBox ? <Check /> : null}
        </View>
      </TouchableOpacity>
      <Text style={[styles.checkBoxTitle, { color: toggleCheckBox ? BLUE : BLACK }]}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "50%",
    marginTop: 17,
  },
  checkBox: {
    height: 22,
    width: 22,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  checkBoxTitle: {
    fontSize: FONT_SIZE_16,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
