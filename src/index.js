import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

//navigation
import RootNavigator from "@navigations/index";

//styles
import { BG } from "@styles/colors";
import { FONT_FAMILY_REGULAR } from "@styles/typography";
import axios from "axios";
import API from "./services/api";

export default function App() {
  // useEffect(() => {
  //   let allReq = [];
  //   for (let i = 1; i <= 10; i++) {
  //     allReq.push(API.get(`/restaurants/${i}`));
  //   }
  //   axios
  //     .all(allReq)
  //     .then((res) => {
  //       const data = res.map(
  //         ({
  //           data: { placeName, cuisineType, deliveryTime, rate, imgUri, dishes, optional, id },
  //         }) => ({
  //           placeName,
  //           cuisineType,
  //           deliveryTime,
  //           rate,
  //           imgUri,
  //           dishes,
  //           optional,
  //           id,
  //         })
  //       );
  //
  //       // setRestaurantData(data);
  //       restaurantsStore.writeRestaurants(data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const [loaded] = useFonts({
    SFUIDisplayBold: require("./assets/fonts/SFUIDisplay-Bold.ttf"),
    SFUIDisplayMedium: require("./assets/fonts/SFUIDisplay-Medium.ttf"),
    SFUIDisplayRegular: require("./assets/fonts/SFUIDisplay-Regular.ttf"),
    SFUIDisplaySemibold: require("./assets/fonts/SFUIDisplay-Semibold.ttf"),
  });

  if (!loaded) return null;
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: FONT_FAMILY_REGULAR,
    flex: 1,
    backgroundColor: BG,
  },
});

// registerRootComponent(App);
