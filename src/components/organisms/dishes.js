import React from "react";
import { View, StyleSheet } from "react-native";
import { Dish } from "@molecules/index";

//SVGs
import PizzaIcon from "@icons/dishes/pizza.svg";
import SushiIcon from "@icons/dishes/sushi.svg";
import SnacksIcon from "@icons/dishes/snacks.svg";
import LunchIcon from "@icons/dishes/lunch.svg";
import FastfoodIcon from "@icons/dishes/fastfood.svg";
import SaladsIcon from "@icons/dishes/salads.svg";
import DessertsIcon from "@icons/dishes/desserts.svg";
import SoupsIcon from "@icons/dishes/soups.svg";
import MoreIcon from "@icons/dishes/more.svg";
//styles
import { PADDING_HORIZONTAL } from "@styles/spacing";

export default function Dishes({ type, navigation: { navigate } }) {
  const data = [
    {
      title: "Pizza",
      subtitle: "Italian cuisine",
      id: "1",
      icon: <PizzaIcon />,
      require: require("@images/dishes/pizza_.png"),
    },
    {
      title: "Sushi",
      subtitle: "Japanese cuisine",
      id: "2",
      icon: <SushiIcon />,
      require: require("@images/dishes/sushi_.png"),
    },
    {
      title: "Snacks",
      subtitle: "Different cuisines",
      id: "3",
      icon: <SnacksIcon />,
      require: require("@images/dishes/snacks_.png"),
    },
    {
      title: "Lunch",
      subtitle: "Different cuisines",
      id: "4",
      icon: <LunchIcon />,
      require: require("@images/dishes/lunch_.png"),
    },
    {
      title: "Fastfood",
      subtitle: "American cuisine",
      id: "5",
      icon: <FastfoodIcon />,
      require: require("@images/dishes/fastfood_.png"),
    },
    {
      title: "Desserts",
      subtitle: "Different cuisines",
      id: "6",
      icon: <DessertsIcon />,
      require: require("@images/dishes/desserts_.png"),
    },
    {
      title: "Salads",
      subtitle: "Different cuisines",
      id: "7",
      icon: <SaladsIcon />,
      require: require("@images/dishes/salads_.png"),
    },
    {
      title: "Soups",
      subtitle: "Different cuisines",
      id: "8",
      icon: <SoupsIcon />,
      require: require("@images/dishes/soups_.png"),
    },
  ];

  let content = null;
  if (type === "small") {
    const more = (
      <Dish
        title={"More"}
        onPress={() => navigate("MoreDishes", { headerTitle: "Dishes" })}
        icon={<MoreIcon />}
        style={styles.placeSmall}
        type={"small"}
        key={data[data.length - 1].id}
      />
    );
    content = data.slice(0, 7).map(({ title, subtitle, id, icon }) => {
      return (
        <Dish
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
    let pairingRow = false;
    content = data.map(({ title, subtitle, id, icon, require }, index) => {
      pairingRow = !((index + 1) % 2) ? !pairingRow : pairingRow;
      const thirdInBlock = index % 4 === 2;
      return (
        <Dish
          title={title}
          subtitle={subtitle}
          onPress={() => navigate("Dish", { headerTitle: title })}
          icon={icon}
          key={id}
          require={require}
          style={[
            styles.placeBig,
            {
              height: pairingRow ? 226 : 156,
              marginTop: thirdInBlock ? -70 : 0,
            },
          ]}
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
