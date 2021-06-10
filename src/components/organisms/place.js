import React, { Suspense } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { BLACK, PRIMARY, SECONDARY, WHITE } from "@styles/colors";

//SVGs
import Clock from "@icons/clock.svg";
import Star from "@icons/star.svg";
import {
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_13,
  FONT_SIZE_16,
} from "@styles/typography";

export default function Place({ placeName, cuisineType, deliveryTime, rate, imgReq }) {
  const deliver = deliveryTime[1]
    ? `${deliveryTime[0]}-${deliveryTime[1]} min`
    : `${deliveryTime[0]} min`;

  const validRate = (value) =>
    Number.isNaN(value) || value === "undefined"
      ? "None"
      : Number.isInteger(value)
      ? value
      : value.toFixed(1);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View>
          <Text style={styles.placeName} numberOfLines={1}>
            {placeName}
          </Text>
          <Text style={styles.cuisineType} numberOfLines={1}>
            {cuisineType}
          </Text>
        </View>
        <View style={styles.details}>
          <View style={styles.delivery}>
            <Clock style={styles.icon} />
            <Text style={styles.detailsText}>{deliver}</Text>
          </View>
          <View style={styles.rate}>
            <Star style={styles.icon} />
            <Text style={styles.detailsText}>{validRate(+rate)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.right}>
        {/*<Suspense fallback={<ActivityIndicator size='large' color={PRIMARY} />}>*/}
        <Image source={imgReq} style={styles.rightImg} />
        {/*</Suspense>*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 100,
    backgroundColor: WHITE,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
  },
  left: {
    flex: 2,
    paddingVertical: 13,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  placeName: {
    fontSize: FONT_SIZE_16,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  cuisineType: {
    fontSize: FONT_SIZE_13,
    fontFamily: FONT_FAMILY_REGULAR,
    color: SECONDARY,
  },
  details: {
    flexDirection: "row",
  },
  delivery: {
    flexDirection: "row",
    marginRight: 13,
  },
  icon: {
    marginTop: -2,
  },
  rate: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  detailsText: {
    color: BLACK,
    fontSize: FONT_SIZE_13,
    fontFamily: FONT_FAMILY_REGULAR,
    marginLeft: 6,
    lineHeight: FONT_SIZE_13,
  },
  right: {
    flex: 1,
    flexDirection: "row",
    padding: 2,
  },
  rightImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
