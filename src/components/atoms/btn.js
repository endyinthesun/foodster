import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, Typo } from "_styles";
import BagIcon from "_icons/bag-active.svg";
import ArrowRight from "_icons/arrow-right.svg";

//type = "number" || "price"
//num = Number.isInteger(true)

export default function Btn({ title, handle, type = "", num = null }) {
  //Styles value
  const { PRIMARY, WHITE } = Colors;
  const { FONT_SIZE_16, FONT_FAMILY_SEMIBOLD } = Typo;
  const validNumber = type === "number" && Number.isInteger(num);
  const validPrice = type === "price" && Number.isInteger(num);
  const styles = StyleSheet.create({
    btn: {
      backgroundColor: PRIMARY,
      paddingVertical: 18,
      paddingHorizontal: 20,
      borderRadius: 15,
      flexDirection: "row",
      justifyContent: validPrice ? "space-between" : "center",
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
  const numberContent = <Text style={styles.btnText}>({num})</Text>;
  const priceContent = (
    <View style={styles.priceContent}>
      <BagIcon fill='#fff' style={{ marginRight: 8 }} />
      <Text style={{ ...styles.btnText, marginRight: 16 }}>${num}</Text>
      <ArrowRight />
    </View>
  );

  return (
    <Pressable onPress={handle} style={styles.btn}>
      <Text style={styles.btnText}>{title} </Text>
      {validNumber ? numberContent : validPrice ? priceContent : null}
    </Pressable>
  );
}
