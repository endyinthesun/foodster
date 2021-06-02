import React from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import Back from "@icons/back.svg";
import Search from "@icons/search.svg";

import { Colors } from "@styles";

const { WHITE } = Colors;

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
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Pressable onPress={navigation.goBack}>
          <Back />
        </Pressable>
        <Text>{title}</Text>
        <Search />
      </View>
      <ScrollView>
        {random}
        {random}
        {random}
        {random}
        {random}
        {random}
        {random}
        {random}
        {random}
        {random}
        {random}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 54,
    backgroundColor: WHITE,
  },
});
