import React from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";

const ProfileScreen = ({ navigation }) => (
  <SafeAreaView>
    <TouchableHighlight onPress={() => navigation.navigate("Main")}>
      <Text>Profile</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default ProfileScreen;
