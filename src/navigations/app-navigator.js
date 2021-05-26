import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "_icons/main.svg";

import MainScreen from "_scenes/main";
import RestaurantsScreen from "_scenes/restaurants";
import MyOrderScreen from "_scenes/my-order";
import PromotionsScreen from "_scenes/promotions";
import ProfileScreen from "_scenes/profile";
import { Colors } from "_styles";

const Tab = createBottomTabNavigator();
const { PRIMARY, WHITE, BLACK } = Colors;
function AppNavigator() {
  const styles = StyleSheet.create({
    tabNavigator: {
      height: 56,
      backgroundColor: WHITE,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  });
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          // showLabel: false,
          style: styles.tabNavigator,
        }}
      >
        <Tab.Screen
          name='Main'
          component={MainScreen}
          option={{ title: "Main" }}
        />
        <Tab.Screen
          name='Restaurants'
          component={RestaurantsScreen}
          option={{ title: "Restaurants" }}
        />
        <Tab.Screen
          name='My Order'
          component={MyOrderScreen}
          option={{ title: "My Order" }}
        />
        <Tab.Screen
          name='Promotions'
          component={PromotionsScreen}
          option={{ title: "Promotions" }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          option={{ title: "Profile" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
