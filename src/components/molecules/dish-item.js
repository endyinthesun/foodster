import React, { Suspense } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from "react-native";
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

export default function DishItem({
  title,
  ingredients,
  price,
  weight,
  dishesType,
  imgUri,
  id,
  navigation,
  outStyles = null,
}) {
  const ingredientsStroke = ingredients.join(", ");
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Dish", { title, ingredients, price, weight, imgUri, id })}
    >
      <View style={[styles.container, outStyles]}>
        <View style={styles.left}>
          <Text style={styles.placeName} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.ingredients} numberOfLines={2}>
            {ingredientsStroke}
          </Text>
          <View style={styles.details}>
            <Text style={styles.priceText}>${price}</Text>
            <Text style={styles.weightText}>{weight} g</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Image source={{ uri: imgUri }} style={styles.rightImg} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 110,
    backgroundColor: WHITE,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
  },
  left: {
    flex: 2,
    paddingVertical: 13,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
  },
  placeName: {
    fontSize: FONT_SIZE_16,
    fontFamily: FONT_FAMILY_MEDIUM,
    color: BLACK,
  },
  ingredients: {
    fontSize: FONT_SIZE_13,
    fontFamily: FONT_FAMILY_REGULAR,
    color: SECONDARY,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 13,
    left: 16,
  },
  priceText: {
    color: PRIMARY,
    fontSize: FONT_SIZE_16,
    fontFamily: FONT_FAMILY_MEDIUM,
    marginRight: 10,
  },
  weightText: {
    color: SECONDARY,
    fontSize: FONT_SIZE_13,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  right: {
    flex: 1,
    flexDirection: "row",
    padding: 2,
  },
  rightImg: {
    flex: 1,
    resizeMode: "cover",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
