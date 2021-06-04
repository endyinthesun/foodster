import React from "react";
import { View, Text, Button, Pressable, StyleSheet } from "react-native";

//styles
import { WHITE, SECONDARY, PRIMARY } from "@styles/colors";
import { FONT_SIZE_16 } from "@styles/typography";

export default function Place({ title, onPress, icon }) {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      {({ pressed }) => (
        <>
          <View style={styles.icon}>{icon}</View>
          <Text style={[styles.text, { color: pressed ? PRIMARY : SECONDARY }]}>{title}</Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
  },
  icon: {
    backgroundColor: WHITE,
    borderRadius: 20,
    height: 75,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { marginTop: 10, fontSize: FONT_SIZE_16 },
});
