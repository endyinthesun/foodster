import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

//SVGs
import ArrowLineRight from "@icons/arrow-line-right.svg";

//store
import { restaurantsStore } from "@store/index";

//styles
import { BLACK, BLUE, PRIMARY, WHITE } from "@styles/colors";
import { PADDING_HORIZONTAL } from "@styles/spacing";

//services
import FoodsterService from "@services/service";
import {
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_13,
  FONT_SIZE_20,
} from "@styles/typography";
import { Place } from "@molecules/index";
const restaurant = new FoodsterService();

export default function NewRestaurants({ amount, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    restaurant
      .getAllRestaurants()
      .then((data) => {
        data.sort(
          (a, b) => new Date(a.dateOfCreation).getTime() - new Date(b.dateOfCreation).getTime()
        );
        restaurantsStore.writeNewRestaurants(data.reverse());
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [restaurantsStore.newRestaurantsData]);
  const content = isLoading ? (
    <ActivityIndicator size='large' color={PRIMARY} />
  ) : (
    <FlatList
      data={restaurantsStore.newRestaurantsData.slice(0, amount)}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({ item }) => {
        return <Place {...item} outStyles={{ width: 296, marginRight: 10 }} {...props} />;
      }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}> New restaurants</Text>
        <View style={styles.btn}>
          <Text style={styles.btnText}>All</Text>
          <ArrowLineRight />
        </View>
      </View>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingLeft: PADDING_HORIZONTAL,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    color: BLACK,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_20,
  },
  btn: {
    flexDirection: "row",

    height: 40,
    paddingLeft: 22,
    paddingRight: 16,
    backgroundColor: WHITE,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  btnText: {
    marginRight: 6,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_13,
    color: BLUE,
  },
});
