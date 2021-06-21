import React, { useState, useReducer } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet, FlatList } from "react-native";

//components
import { Header, Dishes } from "@organisms/index";

export default function MoreDishesScreen({ navigation, route }) {
  const { headerTitle } = route.params;
  const title = headerTitle !== undefined ? headerTitle : route.name;

  return (
    <>
      <Header type={"titleSearch"} title={title} navigation={navigation} />
      <ScrollView>
        <Dishes type={"big"} navigation={navigation} />
      </ScrollView>
    </>
  );
}
