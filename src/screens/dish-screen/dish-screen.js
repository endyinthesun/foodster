import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Image, Pressable, Animated } from "react-native";
import { Header, ModalAbout } from "@organisms/index";
import { observer } from "mobx-react-lite";

//SVGs
import Truck from "@icons/truck.svg";
import Clock from "@icons/clock.svg";
import Star from "@icons/star.svg";

//store
import { othersStore } from "@store/index";

//styles
import { PADDING_HORIZONTAL } from "@styles/spacing";
import {
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_13,
  FONT_SIZE_20,
} from "@styles/typography";
import { BLACK, BLUE, WHITE } from "@styles/colors";

//components
import CategoriesFilter from "@organisms/categories-filter";
import { FadeBg } from "@atoms/index";
import { DishItem } from "@molecules/index";

export default observer(function PlaceScreen(props) {
  const {
    placeName,
    imgUri,
    deliveryTime,
    cuisineType,
    rate,
    dishes,
    description,
    phoneNumbers,
    email,
    workingTime,
    freeFrom,
    deliverySchedule,
  } = props.route.params;
  const { Value, diffClamp, add } = Animated;

  const [scrollYValue] = useState(new Value(0));
  console.log("props.route.params-- ", props.route.params);
  const deliver = deliveryTime[1]
    ? `${deliveryTime[0]}-${deliveryTime[1]} min`
    : `${deliveryTime[0]} min`;
  const currentPlaceFilters = ["All", ...dishes];

  const clampedScroll = diffClamp(
    add(
      scrollYValue.interpolate({
        inputRange: [0, 30],
        outputRange: [0, 10],
        extrapolateLeft: "clamp",
      }),
      new Value(0)
    ),
    0,
    50
  );

  return (
    <View style={{ flex: 1 }}>
      <FadeBg toggle={othersStore.modalAbout} />
      <View style={styles.bigHeader}>
        <ImageBackground source={{ uri: imgUri }} style={styles.bgImg}>
          <Header type={"infoSearch"} {...props} />
          <View style={styles.subhead}>
            <View>
              <Text style={styles.placeName}>{placeName}</Text>
              <Text style={styles.cuisineType}>{cuisineType} cuisine</Text>
            </View>
            <View>
              <View style={styles.logoPlace} />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <View style={styles.infoBlock}>
              <Truck style={styles.infoIcon} />
              <Text style={styles.infoText}>
                Free from $<Text style={styles.price}>{freeFrom}</Text>
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Clock style={styles.infoIcon} />
              <Text style={styles.infoText}>{deliver}</Text>
            </View>
            <View style={styles.infoBlock}>
              <Star style={styles.infoIcon} />
              <Text style={styles.infoText}>{rate}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.categoriesFilter}>
        <CategoriesFilter
          content={currentPlaceFilters}
          type={"place"}
          clampedScroll={clampedScroll}
        />
      </View>
      {/*<View>*/}
      {/*  <Animated.FlatList*/}
      {/*    contentContainerStyle={styles.restaurantsList}*/}
      {/*    data={filtersData(categoryData)}*/}
      {/*    keyExtractor={(item) => item.id.toString()}*/}
      {/*    renderItem={({ item }) => (*/}
      {/*      <DishItem {...item} outStyles={{ width: "100%" }} {...props} />*/}
      {/*    )}*/}
      {/*    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollYValue } } }], {*/}
      {/*      useNativeDriver: true,*/}
      {/*    })}*/}
      {/*    contentInsetAdjustmentBehavior='automatic'*/}
      {/*  />*/}
      {/*</View>*/}
      <ModalAbout
        description={description}
        phoneNumbers={phoneNumbers}
        email={email}
        workingTime={workingTime}
        freeFrom={freeFrom}
        deliverySchedule={deliverySchedule}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  bigHeader: {
    height: 180,
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  subhead: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  placeName: {
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_20,
    color: WHITE,
  },
  cuisineType: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_13,
    color: WHITE,
  },
  logoPlace: {
    height: 64,
    width: 64,
    borderRadius: 64,
    backgroundColor: WHITE,
  },
  infoContainer: {
    paddingHorizontal: PADDING_HORIZONTAL,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -24,
  },
  info: {
    flexDirection: "row",
    backgroundColor: WHITE,
    padding: 16,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  infoBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    marginRight: 6,
  },
  infoText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_13,
    color: BLACK,
  },
  price: {
    color: BLUE,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  categoriesFilter: {
    marginTop: 25,
    paddingLeft: PADDING_HORIZONTAL,
  },
  restaurantsList: {
    paddingBottom: 32,
    paddingHorizontal: 13,
  },
});
