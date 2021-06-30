import React, { Suspense } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
} from "react-native";
import { BLACK, SECONDARY, WHITE } from "@styles/colors";

//SVGs
import Clock from "@icons/clock.svg";
import Star from "@icons/star.svg";
import {
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_13,
  FONT_SIZE_16,
} from "@styles/typography";

export default function PlaceItem({
  id,
  placeName,
  cuisineType,
  deliveryTime,
  rate,
  imgUri,
  navigation,
  scale,
  outStyles,
}) {
  const deliver = deliveryTime[1]
    ? `${deliveryTime[0]}-${deliveryTime[1]} min`
    : `${deliveryTime[0]} min`;

  const validRate = (value) =>
    value === undefined
      ? null
      : !Number.isNaN(+value) && Number.isInteger(value)
      ? value
      : value.toFixed(1);
  const correctRate = validRate(rate);
  return (
    <Animated.View style={{ transform: [{ scale: scale ? scale : 1 }] }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Place", {
            id,
          })
        }
        style={[styles.container, outStyles]}
      >
        <View style={styles.left}>
          <View>
            <Text style={styles.placeName} numberOfLines={1}>
              {placeName}
            </Text>
            <Text style={styles.cuisineType} numberOfLines={1}>
              {`${cuisineType} cuisine`}
            </Text>
          </View>
          <View style={styles.details}>
            <View style={styles.delivery}>
              <Clock style={styles.icon} />
              <Text style={styles.detailsText}>{deliver}</Text>
            </View>
            {rate === undefined ? null : (
              <View style={styles.rate}>
                <Star style={styles.icon} />
                <Text style={styles.detailsText}>{correctRate}</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.right}>
          <Image
            source={{ uri: imgUri }}
            style={styles.rightImg}
            loadingIndicatorSource={<ActivityIndicator />}
          />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: WHITE,
    borderRadius: 20,
    marginBottom: 12,
    shadowColor: BLACK,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
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
    color: BLACK,
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
    flex: 1,
    resizeMode: "cover",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
