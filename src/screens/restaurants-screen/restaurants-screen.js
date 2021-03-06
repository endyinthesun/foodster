import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
  Animated,
} from "react-native";
import { observer } from "mobx-react-lite";

//components
import { Header, ModalFilterMenu, CategoriesFilter } from "@organisms/index";
import { PlaceItem, SearchResult } from "@molecules/index";

//SVGs
import Filter from "@icons/filter.svg";

//styles
import { FONT_FAMILY_SEMIBOLD, FONT_SIZE_16, FONT_SIZE_20 } from "@styles/typography";
import { BLUE, BLACK, PRIMARY } from "@styles/colors";

//store
import { filtersStore, othersStore, restaurantsStore } from "@store/index";

//utils
import FoodsterService from "@services/service";
import { DISHES_DATA } from "@assets/data";
import { FadeBg } from "@atoms/index";
import SearchBar from "@molecules/search-bar";
import { ITEM_HEIGHT } from "@styles/spacing";

const restaurant = new FoodsterService();
export default observer(function RestaurantsScreen(props) {
  const { navigation } = props;
  const { Value, diffClamp, add } = Animated;
  const [isLoading, setIsLoading] = useState(true);
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

  let dishFilters = ["All"];
  DISHES_DATA.forEach((item) => dishFilters.push(item.title));

  useEffect(() => {
    restaurant
      .getAllRestaurantsItems()
      .then((data) => {
        restaurantsStore.writeRestaurantsItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const categoryData =
    filtersStore.dishFilter === "All"
      ? restaurantsStore.data.slice()
      : restaurantsStore.data
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
  const noResultText = <Text style={styles.noResultText}> Nothing to view ???? </Text>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FadeBg toggle={othersStore.modalFilterMenu} />
      <Header type={"withLogo"} navigation={navigation} />
      <SearchResult />
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                translateY: categoriesTranslate,
              },
            ],
          },
        ]}
      >
        <View>
          <CategoriesFilter
            content={dishFilters}
            type={"restaurants"}
            clampedScroll={clampedScroll}
          />
          <View style={styles.head}>
            <Text style={styles.headText}>Restaurants</Text>
            <Pressable
              style={styles.filter}
              onPress={() => othersStore.toggleModalFilterMenu(true)}
            >
              <Filter />
              <Text style={styles.filterText}>Filter</Text>
            </Pressable>
          </View>
        </View>
        {isLoading ? (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size='large' color={PRIMARY} />
          </View>
        ) : (
          <Animated.View>
            <Animated.FlatList
              contentContainerStyle={styles.restaurantsList}
              data={filtersData(categoryData)}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => {
                const inputRange = [
                  -1,
                  0,
                  (ITEM_HEIGHT + 12) * index,
                  (ITEM_HEIGHT + 12) * (index + 2),
                ];
                const scale = scrollYValue.interpolate({
                  inputRange,
                  outputRange: [1, 1, 1, 0],
                });
                return (
                  <PlaceItem
                    {...item}
                    {...props}
                    scale={scale}
                    outStyles={{ height: ITEM_HEIGHT }}
                  />
                );
              }}
              ListEmptyComponent={noResultText}
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollYValue } } }], {
                useNativeDriver: true,
              })}
              contentInsetAdjustmentBehavior='automatic'
            />
          </Animated.View>
        )}
      </Animated.View>
      <ModalFilterMenu />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 3,
    paddingBottom: 56,
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
