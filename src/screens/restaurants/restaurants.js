import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import { observer } from "mobx-react-lite";

//data
import { DISHES_DATA, RESTAURANTS_DATA } from "@assets/data";

//components
import { Header, Place, DishesFilter } from "@organisms/index";

//SVGs
import Filter from "@icons/filter.svg";

//styles
import {
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_13,
  FONT_SIZE_16,
  FONT_SIZE_20,
} from "@styles/typography";
import { BLUE, SECONDARY, WHITE, PRIMARY } from "@styles/colors";

//store
import nav from "@store/navigation";

export default observer(function RestaurantsScreen({ navigation, route }) {
  // useEffect(() => {
  //   if (route.params) {
  //     setDishCategory(route.params.headerTitle);
  //   }
  // });

  const filteredRestaurantData =
    nav.filter === "All"
      ? RESTAURANTS_DATA
      : RESTAURANTS_DATA.filter(({ dishes }) => dishes.includes(nav.filter));
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header type={"withLogo"} />
      <View style={styles.container}>
        <View>
          <DishesFilter />
        </View>
        <View style={styles.head}>
          <Text style={styles.headText}>Restaurants</Text>
          <View style={styles.filter}>
            <Filter />
            <Text style={styles.filterText}>Filter</Text>
          </View>
        </View>
        <FlatList
          contentContainerStyle={styles.restaurantsList}
          data={filteredRestaurantData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Place
              placeName={item.placeName}
              cuisineType={item.cuisineType}
              deliveryTime={item.deliveryTime}
              rate={item.rate}
              imgReq={item.imgReq}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 3,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    marginTop: 24,
    paddingBottom: 16,
  },
  headText: {
    fontSize: FONT_SIZE_20,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    fontSize: FONT_SIZE_16,
    color: BLUE,
    marginLeft: 8,
  },
  restaurantsList: {
    paddingBottom: 32,
    paddingHorizontal: 13,
  },
});
