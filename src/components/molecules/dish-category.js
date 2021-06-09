import React from "react";
import { View, Text, Button, Pressable, StyleSheet, Image, ImageBackground } from "react-native";

//styles
import { WHITE, SECONDARY, PRIMARY, BLACK } from "@styles/colors";
import { FONT_SIZE_16, FONT_SIZE_13, FONT_FAMILY_MEDIUM } from "@styles/typography";

export default function DishCategory({ type, title, subtitle, onPress, icon, require, style }) {
  const small = type === "small";
  const big = type === "big";

  return small ? (
    <Pressable onPress={onPress} style={[styles.placeSmall, style]}>
      {({ pressed }) => (
        <>
          <View style={styles.iconSmall}>{icon}</View>
          <Text style={[styles.titleSmall, { color: pressed ? PRIMARY : SECONDARY }]}>{title}</Text>
        </>
      )}
    </Pressable>
  ) : big ? (
    <View style={[styles.placeBigContainer, style]}>
      <Pressable onPress={onPress} style={styles.placeBig}>
        {({ pressed }) => (
          <View style={{ flex: 1 }}>
            <ImageBackground source={require} style={styles.bgBig}>
              {/*<View style={{ height: "100%", justifyContent: "flex-end" }}></View>*/}
            </ImageBackground>
            <Text style={[styles.titleBig, { color: pressed ? PRIMARY : BLACK }]}>{title}</Text>
            <Text style={styles.subtitleBig}>{subtitle}</Text>
          </View>
        )}
      </Pressable>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  //small
  placeSmall: {
    alignItems: "center",
  },
  iconSmall: {
    backgroundColor: WHITE,
    borderRadius: 20,
    height: 74,
    width: 74,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleSmall: { marginTop: 10, fontSize: FONT_SIZE_16 },

  //big
  placeBigContainer: {
    padding: 8,
  },
  placeBig: {
    overflow: "hidden",
    height: "100%",
    backgroundColor: WHITE,
    paddingLeft: 16,
    paddingBottom: 16,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 20,
  },
  bgBig: {
    // flex: 1,
    height: "100%",
    resizeMode: "cover",
    overflow: "visible",
  },
  titleBig: { marginTop: 10, fontSize: FONT_SIZE_16, fontFamily: FONT_FAMILY_MEDIUM },
  subtitleBig: { fontSize: FONT_SIZE_13, color: SECONDARY },
});
