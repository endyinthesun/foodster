import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Animated, ActivityIndicator } from "react-native";
import { Header, ModalAbout } from "@organisms/index";
import { observer } from "mobx-react-lite";
import { LinearGradient } from "expo-linear-gradient";
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
import { BLACK, BLUE, PRIMARY, WHITE, WHITE_TRANSPARENT } from "@styles/colors";

//components
import CategoriesFilter from "@organisms/categories-filter";
import { FadeBg } from "@atoms/index";
import { DishItem } from "@molecules/index";

//service
import FoodsterService from "@services/service";
const restaurant = new FoodsterService();

export default observer(function PlaceScreen(props) {
  const [place, setPlace] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = props.route.params;
  useEffect(() => {
    restaurant
      .getRestaurant(id)
      .then((data) => {
        setPlace(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  let deliver = null,
    currentPlaceFilters = [];
  if (!(Object.keys(place).length === 0)) {
    deliver = place.deliveryTime[1]
      ? `${place.deliveryTime[0]}-${place.deliveryTime[1]} min`
      : `${place.deliveryTime[0]} min`;
    currentPlaceFilters = ["All", ...place.dishes];
  }

  const { Value, diffClamp, add } = Animated;

  const [scrollYValue] = useState(new Value(0));

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
  const categoriesTranslate = clampedScroll.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -170],
    extrapolate: "clamp",
  });
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color={PRIMARY} />
        </View>
      ) : (
        <>
          <FadeBg toggle={othersStore.modalAbout} />
          <View style={styles.bigHeader}>
            <ImageBackground source={{ uri: place.imgUri }} style={styles.bgImg}>
              <LinearGradient
                colors={[
                  "rgba(253, 122, 92, 0.5)",
                  "rgba(253, 122, 92, 0.73)",
                  "rgba(197, 81, 54, 0.8)",
                ]}
                locations={[0, 0.6, 1]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
              />
              <Header type={"infoSearch"} {...props} />
              <View style={styles.subhead}>
                <View>
                  <Text style={styles.placeName}>{place.placeName}</Text>
                  <Text style={styles.cuisineType}>{place.cuisineType} cuisine</Text>
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
                    Free from $<Text style={styles.price}>{place.freeFrom}</Text>
                  </Text>
                </View>
                <View style={styles.infoBlock}>
                  <Clock style={styles.infoIcon} />
                  <Text style={styles.infoText}>{deliver}</Text>
                </View>
                <View style={styles.infoBlock}>
                  <Star style={styles.infoIcon} />
                  <Text style={styles.infoText}>{place.rate}</Text>
                </View>
              </View>
            </View>
          </View>
          <Animated.View
            style={[
              // styles.container,
              {
                flex: 1,
                transform: [
                  {
                    translateY: categoriesTranslate,
                  },
                ],
              },
            ]}
          >
            <View style={styles.categoriesFilter}>
              <CategoriesFilter
                content={currentPlaceFilters}
                type={"place"}
                clampedScroll={clampedScroll}
              />
            </View>
            <View style={{ flex: 1 }}>
              {place.menu ? (
                <Animated.FlatList
                  contentContainerStyle={styles.restaurantsList}
                  data={place.menu}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => {
                    return <DishItem {...item} {...props} />;
                  }}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
                    {
                      useNativeDriver: true,
                    }
                  )}
                  contentInsetAdjustmentBehavior='automatic'
                />
              ) : (
                <Text>Nothing to view :(</Text>
              )}
            </View>
          </Animated.View>
          <ModalAbout
            description={place.description}
            phoneNumbers={place.phoneNumbers}
            email={place.email}
            workingTime={place.workingTime}
            freeFrom={place.freeFrom}
            deliverySchedule={place.deliverySchedule}
          />
        </>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 3,
    // paddingBottom: 56,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
    // flex: 1,
    paddingBottom: 32,
    paddingHorizontal: 13,
  },
});
