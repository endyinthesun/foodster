import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { DishCategory } from "@molecules/index";
import { DISHES_DATA } from "@assets/data";

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

//stores
import nav from "@store/navigation";

export default function Dishes({ type, navigation: { navigate } }) {
  let content = null;
  if (type === "small") {
    const more = (
      <DishCategory
        title={"More"}
        onPress={() => navigate("MoreDishes", { headerTitle: "Dishes" })}
        icon={<MoreIcon />}
        style={styles.placeSmall}
        type={"small"}
        key={DISHES_DATA[DISHES_DATA.length - 1].id}
      />
    );
    content = DISHES_DATA.slice(0, 7).map(({ title, subtitle, id, icon }) => {
      return (
        <DishCategory
          title={title}
          onPress={() => {
            nav.changeFilter(title);
            navigate("Restaurants", { headerTitle: title });
          }}
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
    content = DISHES_DATA.map(({ title, subtitle, id, icon, require }, index) => {
      pairingRow = !((index + 1) % 2) ? !pairingRow : pairingRow;
      const thirdInBlock = index % 4 === 2;
      return (
        <DishCategory
          title={title}
          subtitle={subtitle}
          onPress={() => {
            nav.changeFilter(title);
            navigate("Restaurants", { headerTitle: title });
          }}
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
