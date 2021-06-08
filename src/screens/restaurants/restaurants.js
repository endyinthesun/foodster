import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Header, Place } from "@organisms/index";

//SVGs
import Filter from "@icons/filter.svg";
import {
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_13,
  FONT_SIZE_16,
  FONT_SIZE_20,
} from "@styles/typography";
import { BLUE, SECONDARY, WHITE } from "@styles/colors";

export default function RestaurantsScreen({ navigation }) {
  const DATA = [
    {
      placeName: "Family place",
      cuisineType: "Ukrainian cuisine",
      deliveryTime: [10, 15],
      rate: 5,
      imgReq: require("@images/restaurants/img.png"),
      id: "1",
    },
    {
      placeName: "fffff",
      cuisineType: "sdfdff",
      deliveryTime: [10, 30],
      rate: 4,
      imgReq: require("@images/restaurants/img.png"),
      id: "2",
    },
    {
      placeName: "Family place",
      cuisineType: "Ukrainian cuisine",
      deliveryTime: [10, 15],
      rate: 5,
      imgReq: require("@images/restaurants/img.png"),
      id: "3",
    },
    {
      placeName: "Family place",
      cuisineType: "Ukrainian cuisine",
      deliveryTime: [10, 15],
      rate: 5,
      imgReq: require("@images/restaurants/img.png"),
      id: "4",
    },
    {
      placeName: "Family place",
      cuisineType: "Ukrainian cuisine",
      deliveryTime: [10, 15],
      rate: 5,
      imgReq: require("@images/restaurants/img.png"),
      id: "5",
    },
    {
      placeName: "Family place",
      cuisineType: "Ukrainian cuisine",
      deliveryTime: [10, 15],
      rate: 5,
      imgReq: require("@images/restaurants/img.png"),
      id: "6",
    },
    {
      placeName: "Family place",
      cuisineType: "Ukrainian cuisine",
      deliveryTime: [10, 15],
      rate: 5,
      imgReq: require("@images/restaurants/img.png"),
      id: "7",
    },
    {
      placeName: "Family place",
      cuisineType: "Ukrainian cuisine",
      deliveryTime: [10, 15],
      rate: 5,
      imgReq: require("@images/restaurants/img.png"),
      id: "8",
    },
    {
      placeName: "Family place",
      cuisineType: "Ukrainian cuisine",
      deliveryTime: [10, 15],
      rate: 5,
      imgReq: require("@images/restaurants/img.png"),
      id: "9",
    },
    {
      placeName: "Family place",
      cuisineType: "Ukrainian cuisine",
      deliveryTime: [10, 15],
      rate: 5,
      imgReq: require("@images/restaurants/img.png"),
      id: "10",
    },
    {
      placeName: "Family place",
      cuisineType: "Ukrainian cuisine",
      deliveryTime: [10, 15],
      rate: 5,
      imgReq: require("@images/restaurants/img.png"),
      id: "11",
    },
  ];
  const filterData = [
    {
      name: "all",
      id: "1",
    },
    {
      name: "sushi",
      id: "2",
    },
    {
      name: "snacks",
      id: "3",
    },
    {
      name: "lunch",
      id: "4",
    },
    {
      name: "fastfood",
      id: "5",
    },
    {
      name: "salads",
      id: "6",
    },
    {
      name: "desserts",
      id: "7",
    },
    {
      name: "soups",
      id: "8",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header type={"withLogo"} />
      {/*FILTER COMPONENT*/}
      <View style={styles.container}>
        <View>
          <FlatList
            contentContainerStyle={styles.dishesList}
            data={filterData}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.dishContainer}>
                <Text style={styles.dishText}>{item.name}</Text>
              </View>
            )}
          />
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
          data={DATA}
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
}
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
  dishesList: {
    marginTop: 14,
  },
  dishContainer: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: WHITE,
    borderRadius: 10,
    marginRight: 8,
  },
  dishText: {
    color: SECONDARY,
    textTransform: "capitalize",
    fontSize: FONT_SIZE_13,
    fontFamily: FONT_FAMILY_REGULAR,
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
