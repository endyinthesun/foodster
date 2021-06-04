import React, { useState, useReducer } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet, FlatList } from "react-native";

//components
import { Header, Places } from "@organisms";
import { Place } from "@molecules";

//styles
import { WHITE } from "@styles/colors";

export default function MoreDishesScreen({ navigation, route }) {
  const { headerTitle } = route.params;
  const title = headerTitle !== undefined ? headerTitle : route.name;
  // const [dishes, setDishes] = useState([
  //   { title: "Pizza", subtitle: "Italian cuisine", id: 1 },
  //   { title: "Sushi", subtitle: "Japanese cuisine", id: 2 },
  //   { title: "Snacks", subtitle: "Different cuisines", id: 3 },
  //   { title: "Lunch", subtitle: "Different cuisines", id: 4 },
  //   { title: "Fastfood", subtitle: "American cuisine", id: 5 },
  //   { title: "Desserts", subtitle: "Different cuisines", id: 6 },
  //   { title: "Soups", subtitle: "Different cuisines", id: 7 },
  //   { title: "Soups", subtitle: "Different cuisines", id: 8 },
  //   { title: "Soups", subtitle: "Different cuisines", id: 9 },
  // ]);
  // let pairingRow = false;

  return (
    <>
      <Header type={"titleSearch"} title={title} navigation={navigation} />
      <ScrollView>
        <Places type={"big"} navigation={navigation} />
      </ScrollView>
      {/*<FlatList*/}
      {/*  numColumns={2}*/}
      {/*  data={dishes}*/}
      {/*  keyExtractor={({ id }) => id}*/}
      {/*  renderItem={({ item, index }) => {*/}
      {/*    const pairing = !((index + 1) % 2);*/}
      {/*    pairingRow = pairing ? !pairingRow : pairingRow;*/}

      {/*    return (*/}
      {/*      <View*/}
      {/*        style={{*/}
      {/*          backgroundColor: pairingRow ? "green" : "red",*/}
      {/*          height: pairingRow ? 40 : 60,*/}
      {/*          // flex: 1,*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        <Text>{item.title}</Text>*/}
      {/*        <Text>{item.subtitle}</Text>*/}
      {/*      </View>*/}
      {/*    );*/}
      {/*  }}*/}
      {/*/>*/}
    </>
  );
}
