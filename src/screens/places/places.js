import React from "react";
import { Button, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import { Header } from "@organisms";
export default function PlacesScreen({ route }) {
  return (
    <View>
      <Header type={"withLogo"} />
      <Text>Time to {route.params.headerTitle}</Text>
    </View>
  );
}
