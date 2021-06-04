import React from "react";
import { Button, SafeAreaView, Text, TouchableHighlight, View } from "react-native";

export default function PlacesScreen({ route }) {
  return (
    <View>
      <Text>Time to {route.params.headerTitle}</Text>
    </View>
  );
}
