import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Place } from "@atoms";

//SVGs
import PizzaIcon from "@icons/products/pizza.svg";
import SushiIcon from "@icons/products/sushi.svg";
import SnacksIcon from "@icons/products/snacks.svg";
import LunchIcon from "@icons/products/lunch.svg";
import FastFoodIcon from "@icons/products/fastfood.svg";
import SaladsIcon from "@icons/products/salads.svg";
import DessertsIcon from "@icons/products/desserts.svg";
import MoreIcon from "@icons/products/more.svg";
//styles
import { Spacing } from "@styles";

const { PADDING_HORIZONTAL } = Spacing;
export default function Places({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Place
          title={"Pizza"}
          onPress={() => navigate("Dish", { headerTitle: "Pizza" })}
          icon={<PizzaIcon />}
        />
        <Place
          title={"Sushi"}
          onPress={() => navigate("Dish", { headerTitle: "Sushi" })}
          icon={<SushiIcon />}
        />
        <Place
          title={"Snacks"}
          onPress={() => navigate("Dish", { headerTitle: "Snacks" })}
          icon={<SnacksIcon />}
        />
        <Place
          title={"Lunch"}
          onPress={() => navigate("Dish", { headerTitle: "Lunch" })}
          icon={<LunchIcon />}
        />
      </View>
      <View style={styles.row}>
        <Place
          title={"Fastfood"}
          onPress={() => navigate("Dish", { headerTitle: "Fastfood" })}
          icon={<FastFoodIcon />}
        />
        <Place
          title={"Salads"}
          onPress={() => navigate("Dish", { headerTitle: "Salads" })}
          icon={<SaladsIcon />}
        />
        <Place
          title={"Desserts"}
          onPress={() => navigate("Dish", { headerTitle: "Desserts" })}
          icon={<DessertsIcon />}
        />
        <Place
          title={"More"}
          onPress={() => navigate("MoreDishes", { headerTitle: "Dishes" })}
          icon={<MoreIcon />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING_HORIZONTAL,
    marginTop: 8,
  },
  row: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 24 },
});
