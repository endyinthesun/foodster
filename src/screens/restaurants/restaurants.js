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

//components
import { Header, Place, ModalFilterMenu, Categories } from "@organisms/index";

//SVGs
import Filter from "@icons/filter.svg";

//styles
import { FONT_FAMILY_SEMIBOLD, FONT_SIZE_16, FONT_SIZE_20 } from "@styles/typography";
import { BLUE, BLACK, PRIMARY } from "@styles/colors";

//store
import { filtersStore, othersStore, restaurantsStore } from "@store/index";

//utils
import API from "@services/api";
import FoodsterService from "@services/service";
import { DISHES_DATA } from "@assets/data";

const restaurant = new FoodsterService();
export default observer(function RestaurantsScreen({ navigation, route }) {
  // const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dishFilters = [{ title: "All", id: 1 }, ...DISHES_DATA];

  useEffect(() => {
    API.get("/restaurants/")
      .then(({ data }) => {
        restaurantsStore.writeRestaurants(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const categoryData =
    filtersStore.dishFilter === "All"
      ? restaurantsStore.restaurantsData.slice()
      : restaurantsStore.restaurantsData
          .slice()
          .filter(({ dishes }) => dishes.includes(filtersStore.dishFilter));
  const filtersData = (data) => {
    const optionalLength = filtersStore.optionalFilters.slice();
    const cuisineLength = filtersStore.cuisineFilters.slice();

    if (!optionalLength.length && !cuisineLength.length) return data;

    const optional = data.filter(({ optional }) => {
      const valid = optionalLength.map((filter) => optional.includes(filter));
      return !valid.includes(false);
    });
    const cuisine = optional.filter(({ cuisineType }) => {
      const valid = cuisineLength.map((fil) => cuisineType === fil);
      return valid.includes(true);
    });
    if (optionalLength.length && !cuisineLength.length) {
      return optional;
    }
    if (!optionalLength.length && cuisineLength.length) {
      return cuisine;
    }
    return cuisine;
  };
  const noResultText = <Text style={styles.noResultText}> No results found 😟 </Text>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header type={"withLogo"} />
      <View style={styles.container}>
        <View>
          <Categories content={dishFilters} />
        </View>
        <View style={styles.head}>
          <Text style={styles.headText}>Restaurants</Text>
          <Pressable style={styles.filter} onPress={() => othersStore.toggleModalVisible(true)}>
            <Filter />
            <Text style={styles.filterText}>Filter</Text>
          </Pressable>
        </View>
        {isLoading ? (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size='large' color={PRIMARY} />
          </View>
        ) : (
          <FlatList
            contentContainerStyle={styles.restaurantsList}
            data={filtersData(categoryData)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Place
                placeName={item.placeName}
                cuisineType={item.cuisineType}
                deliveryTime={item.deliveryTime}
                rate={item.rate}
                imgReq={{ uri: item.imgUri }}
              />
            )}
            ListEmptyComponent={noResultText}
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
  spinnerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  noResultText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: FONT_SIZE_16,
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
    color: BLACK,
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
