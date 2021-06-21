import React from "react";
import { Button, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import { Header } from "@organisms/index";
export default function PlaceScreen({ route }) {
  return (
    <View>
      <Header type={"withLogo"} />
      <Text>Time to {route.params.headerTitle}</Text>
    </View>
  );
}
