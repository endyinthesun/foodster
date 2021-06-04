import React from "react";
import { View, StyleSheet } from "react-native";
import { Place } from "@molecules";

//SVGs
import PizzaIcon from "@icons/products/pizza.svg";
import SushiIcon from "@icons/products/sushi.svg";
import SnacksIcon from "@icons/products/snacks.svg";
import LunchIcon from "@icons/products/lunch.svg";
import FastfoodIcon from "@icons/products/fastfood.svg";
import SaladsIcon from "@icons/products/salads.svg";
import DessertsIcon from "@icons/products/desserts.svg";
import SoupsIcon from "@icons/products/soups.svg";
import MoreIcon from "@icons/products/more.svg";
//styles
import { PADDING_HORIZONTAL } from "@styles/spacing";

export default function Places({ type, navigation: { navigate } }) {
  const data = [
    { title: "Pizza", subtitle: "Italian cuisine", id: 1, icon: <PizzaIcon /> },
    { title: "Sushi", subtitle: "Japanese cuisine", id: 2, icon: <SushiIcon /> },
    { title: "Snacks", subtitle: "Different cuisines", id: 3, icon: <SnacksIcon /> },
    { title: "Lunch", subtitle: "Different cuisines", id: 4, icon: <LunchIcon /> },
    { title: "Fastfood", subtitle: "American cuisine", id: 5, icon: <FastfoodIcon /> },
    { title: "Desserts", subtitle: "Different cuisines", id: 6, icon: <DessertsIcon /> },
    { title: "Salads", subtitle: "Different cuisines", id: 7, icon: <SaladsIcon /> },
    { title: "Soups", subtitle: "Different cuisines", id: 8, icon: <SoupsIcon /> },
  ];

  let content = null;
  if (type === "small") {
    const more = (
      <Place
        title={"More"}
        onPress={() => navigate("MoreDishes", { headerTitle: "Dishes" })}
        icon={<MoreIcon />}
        style={styles.placeSmall}
        type={"small"}
      />
    );
    content = data.slice(0, 7).map(({ title, subtitle, id, icon }) => {
      return (
        <Place
          title={title}
          onPress={() => navigate("Dish", { headerTitle: title })}
          icon={icon}
          key={id}
          style={styles.placeSmall}
          type={"small"}
        />
      );
    });
    content.push(more);
  }
  if (type === "big") {
    content = data.map(({ title, subtitle, id, icon }) => {
      return (
        <Place
          title={title}
          subtitle={subtitle}
          onPress={() => navigate("Dish", { headerTitle: title })}
          icon={icon}
          key={id}
          style={styles.placeBig}
          type={"big"}
        />
      );
    });
  }
  return <View style={styles.container}>{content}</View>;
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING_HORIZONTAL,
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  placeSmall: { width: "25%", marginTop: 24 },
  placeBig: { width: "50%" },
});
