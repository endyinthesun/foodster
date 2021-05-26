import { createAppContainer, createSwitchNavigator } from "react-navigation";

// import AuthNavigator from "./auth-navigator";
import MainScreen from "_scenes/main";

import AppNavigator from "./app-navigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

const AuthStack = createBottomTabNavigator();

function RootNavigator() {
  return <AppNavigator />;
}
export default RootNavigator;
