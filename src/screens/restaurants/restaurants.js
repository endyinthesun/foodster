import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { observer } from "mobx-react-lite";
import axios from "axios";

//components
import { Header, Place, ModalFilterMenu, Categories } from "@organisms/index";

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
import { filters, others } from "@store/index";

//utils
import API from "@utils/api";
import { DISHES_DATA } from "@assets/data";

export default observer(function RestaurantsScreen({ navigation, route }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dishFilters = [{ title: "All", id: 1 }, ...DISHES_DATA];

  useEffect(() => {
    let allReq = [];
    for (let i = 1; i <= 10; i++) {
      allReq.push(API.get(`/restaurants/${i}`));
    }
    axios
      .all(allReq)
      .then((res) => {
        const data = res.map(
          ({
            data: { placeName, cuisineType, deliveryTime, rate, imgUri, dishes, optional, id },
          }) => ({
            placeName,
            cuisineType,
            deliveryTime,
            rate,
            imgUri,
            dishes,
            optional,
            id,
          })
        );

        setRestaurantData(data);
        setIsLoading(!isLoading);
      })
      .catch((err) => console.log(err));
  }, []);
  const categoryData =
    filters.dishFilter === "All"
      ? restaurantData
      : restaurantData.filter(({ dishes }) => dishes.includes(filters.dishFilter));
  const filtersData = (data) => {
    if (!filters.optionalFilters.slice().length && !filters.cuisineFilters.slice().length)
      return data;

    const optional = data.filter(({ optional }) => {
      const valid = filters.optionalFilters.slice().map((filter) => optional.includes(filter));
      return !valid.includes(false);
    });
    const cuisine = optional.filter(({ cuisineType }) => {
      const valid = filters.cuisineFilters.slice().map((fil) => cuisineType === fil);
      return valid.includes(true);
    });
    if (filters.optionalFilters.slice().length && !filters.cuisineFilters.slice().length) {
      return optional;
    }
    if (!filters.optionalFilters.slice().length && filters.cuisineFilters.slice().length) {
      return cuisine;
    }
    return cuisine;
  };
  // console.log("-------- - --------");
  // console.log("filtersData--- ", filtersData(categoryData));
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header type={"withLogo"} />
      <View style={styles.container}>
        <View>
          <Categories content={dishFilters} />
        </View>
        <View style={styles.head}>
          <Text style={styles.headText}>Restaurants</Text>
          <Pressable style={styles.filter} onPress={() => others.toggleModalVisible(true)}>
            <Filter />
            <Text style={styles.filterText}>Filter</Text>
          </Pressable>
        </View>
        {isLoading ? (
          <ActivityIndicator size='large' color={PRIMARY} />
        ) : (
          <FlatList
            contentContainerStyle={styles.restaurantsList}
            data={filtersData(categoryData)}
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
      <ModalFilterMenu />
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
