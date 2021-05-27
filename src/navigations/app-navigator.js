import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TabItem } from "_atoms";

//SVGs
import MainIcon from "_icons/main.svg";
import MainActiveIcon from "_icons/main-active.svg";
import PlacesIcon from "_icons/places.svg";
import PlacesActiveIcon from "_icons/places-active.svg";
import BagIcon from "_icons/bag.svg";
import BagActiveIcon from "_icons/bag-active.svg";
import PromoIcon from "_icons/promo.svg";
import PromoActiveIcon from "_icons/promo-active.svg";
import UserIcon from "_icons/user.svg";
import UserActiveIcon from "_icons/user-active.svg";

//Screens
import MainScreen from "_screens/main";
import RestaurantsScreen from "_screens/restaurants";
import MyOrderScreen from "_screens/my-order";
import PromotionsScreen from "_screens/promotions";
import ProfileScreen from "_screens/profile";

//Styles
import { Colors } from "_styles";

export default function AppNavigator() {
  //Styles value
  const { WHITE } = Colors;

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer style={{ backgroundColor: "red" }}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            backgroundColor: WHITE,
            height: Platform.OS === "ios" ? 86 : 56,
            paddingTop: 12,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
        style={{ backgroundColor: "red" }}
      >
        {TabItem("Main", MainScreen, <MainIcon />, <MainActiveIcon />)}
        {TabItem("Restaurants", RestaurantsScreen, <PlacesIcon />, <PlacesActiveIcon />)}
        {TabItem("My order", MyOrderScreen, <BagIcon />, <BagActiveIcon />)}
        {TabItem("Promotions", PromotionsScreen, <PromoIcon />, <PromoActiveIcon />)}
        {TabItem("Profile", ProfileScreen, <UserIcon />, <UserActiveIcon />)}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
