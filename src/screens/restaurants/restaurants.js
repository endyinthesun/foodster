import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { observer } from "mobx-react-lite";
import axios from "axios";

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

//utils
import API from "@utils/api";

export default observer(function RestaurantsScreen({ navigation, route }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const filteredRestaurantData =
  //   nav.filter === "All"
  //     ? RESTAURANTS_DATA
  //     : RESTAURANTS_DATA.filter(({ dishes }) => dishes.includes(nav.filter));

  useEffect(async () => {
    let allReq = [];
    for (let i = 1; i < 9; i++) {
      allReq.push(API.get(`/restaurants/${i}`));
    }
    axios
      .all(allReq)
      .then((res) => {
        const data = res.map(
          ({ data: { placeName, cuisineType, deliveryTime, rate, imgUri, dishes, id } }) => ({
            placeName,
            cuisineType,
            deliveryTime,
            rate,
            imgUri,
            dishes,
            id,
          })
        );

        setRestaurantData(data);
        setIsLoading(!isLoading);
      })
      .catch((err) => console.log(err));
  }, []);
  const filteredData =
    nav.filter === "All"
      ? restaurantData
      : restaurantData.filter(({ dishes }) => dishes.includes(nav.filter));
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
        {isLoading ? (
          <ActivityIndicator size='large' color={PRIMARY} />
        ) : (
          <FlatList
            contentContainerStyle={styles.restaurantsList}
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Place
                placeName={item.placeName}
                cuisineType={item.cuisineType}
                deliveryTime={item.deliveryTime}
                rate={item.rate}
                imgReq={{ uri: item.imgUri }}
              />
            )}
          />
        )}
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
