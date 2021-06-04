import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

//styles
import { PRIMARY, WHITE } from "@styles/colors";
import { FONT_SIZE_16, FONT_FAMILY_SEMIBOLD } from "@styles/typography";

//SVGs
import BagIcon from "@icons/bag-active.svg";
import ArrowRight from "@icons/arrow-right.svg";

//type = "number" || "price"
//num = Number.isInteger(true)

export default function Btn({ title, handle, type = "", num = null }) {
  const validNumber = type === "number" && Number.isInteger(num);
  const validPrice = type === "price" && Number.isInteger(num);

  const numberContent = <Text style={styles.btnText}>({num})</Text>;
  const priceContent = (
    <View style={styles.priceContent}>
      <BagIcon fill='#fff' style={{ marginRight: 8 }} />
      <Text style={{ ...styles.btnText, marginRight: 16 }}>${num}</Text>
      <ArrowRight />
    </View>
  );

  return (
    <Pressable
      onPress={handle}
      style={{ ...styles.btn, justifyContent: validPrice ? "space-between" : "center" }}
    >
      <Text style={styles.btnText}>{title} </Text>
      {validNumber ? numberContent : validPrice ? priceContent : null}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: PRIMARY,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
  },
  btnText: {
    color: WHITE,
    fontSize: FONT_SIZE_16,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    textTransform: "uppercase",
    textAlign: "center",
  },
  priceContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});
