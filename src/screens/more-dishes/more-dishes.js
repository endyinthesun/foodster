import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet, FlatList } from "react-native";

//components
import { Header } from "@organisms";

//styles
import { WHITE } from "@styles/colors";

export default function MoreDishesScreen({ navigation, route }) {
  const { headerTitle } = route.params;
  const title = headerTitle !== undefined ? headerTitle : route.name;
  const random = (
    <View>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
      <Text>More dishes</Text>
    </View>
  );
  return (
    <>
      <Header type={"onlyTitle"} title={title} navigation={navigation} />
      <Header type={"titleSearch"} title={title} navigation={navigation} />
      <Header type={"withLogo"} title={title} navigation={navigation} />
      <Header type={"onlyBack"} title={title} navigation={navigation} />
      <Header type={"infoSearch"} title={title} navigation={navigation} />

      {random}
    </>
  );
}
