import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const YourPet = ({ kindOfPet }) => {
  return <Text>Hello, i am your {kindOfPet}</Text>;
};

const App = () => {
  return (
    <View>
      <YourPet kindOfPet={"dog"} />
      <YourPet kindOfPet={"cat"} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
