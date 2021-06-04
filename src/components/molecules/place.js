import React from "react";
import { View, Text, Button, Pressable, StyleSheet } from "react-native";

//styles
import { WHITE, SECONDARY, PRIMARY } from "@styles/colors";
import { FONT_SIZE_16 } from "@styles/typography";
import { BLACK } from "@styles/colors";

export default function Place({ type, title, subtitle, onPress, icon, style }) {
  const small = type === "small";
  const big = type === "big";

  return small ? (
    <Pressable onPress={onPress} style={[styles.placeSmall, style]}>
      {({ pressed }) => (
        <>
          <View style={styles.iconSmall}>{icon}</View>
          <Text style={[styles.textSmall, { color: pressed ? PRIMARY : SECONDARY }]}>{title}</Text>
        </>
      )}
    </Pressable>
  ) : big ? (
    <View style={[styles.placeBigWrapper, style]}>
      <Pressable onPress={onPress} style={styles.placeBig}>
        {({ pressed }) => (
          <>
            <View style={styles.iconBig}>{icon}</View>
            <Text style={[styles.textBig, { color: pressed ? PRIMARY : BLACK }]}>{title}</Text>
          </>
        )}
      </Pressable>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  placeSmall: {
    alignItems: "center",
  },
  iconSmall: {
    backgroundColor: WHITE,
    borderRadius: 20,
    height: 75,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  textSmall: { marginTop: 10, fontSize: FONT_SIZE_16 },
  placeBigWrapper: {
    padding: 8,
  },
  placeBig: {
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 20,
  },
  iconBig: {
    height: 75,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  textBig: { marginTop: 10, fontSize: FONT_SIZE_16 },
});
