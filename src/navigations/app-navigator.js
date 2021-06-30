import React, { useEffect, useState } from "react";
import { Keyboard, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

//styles
import { WHITE } from "@styles/colors";

//SVGs
import MainIcon from "@icons/main.svg";
import MainActiveIcon from "@icons/main-active.svg";
import PlacesIcon from "@icons/places.svg";
import PlacesActiveIcon from "@icons/places-active.svg";
import BagIcon from "@icons/bag.svg";
import BagActiveIcon from "@icons/bag-active.svg";
import PromoIcon from "@icons/promo.svg";
import PromoActiveIcon from "@icons/promo-active.svg";
import UserIcon from "@icons/user.svg";
import UserActiveIcon from "@icons/user-active.svg";

//Screens
import {
  MainScreen,
  RestaurantsScreen,
  MyOrderScreen,
  PromotionsScreen,
  ProfileScreen,
  PlaceScreen,
  MoreDishesScreen,
  DishScreen,
} from "@screens/index";

//components
import { BottomBar } from "@organisms/index";

export default function AppNavigator() {
  const TabNav = createBottomTabNavigator();
  const MainStack = createStackNavigator();

  const TabNavScreen = () => (
    <TabNav.Navigator
      tabBarOptions={{ keyboardHidesTabBar: true, headerShown: false }}
      tabBar={(props) => <BottomBar {...props} />}
    >
      <TabNav.Screen
        name='Main'
        component={MainScreen}
        options={{ icon: <MainIcon />, iconActive: <MainActiveIcon /> }}
      />
      <TabNav.Screen
        name='Restaurants'
        component={RestaurantsScreen}
        options={{ icon: <PlacesIcon />, iconActive: <PlacesActiveIcon /> }}
      />
      <TabNav.Screen
        name='My order'
        component={MyOrderScreen}
        options={{ icon: <BagIcon />, iconActive: <BagActiveIcon /> }}
      />
      <TabNav.Screen
        name='Promotions'
        component={PromotionsScreen}
        options={{ icon: <PromoIcon />, iconActive: <PromoActiveIcon /> }}
      />
      <TabNav.Screen
        name='Profile'
        component={ProfileScreen}
        options={{ icon: <UserIcon />, iconActive: <UserActiveIcon /> }}
      />
    </TabNav.Navigator>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name='Main'
            component={TabNavScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name='MoreDishes'
            component={MoreDishesScreen}
            title={"Dishes"}
            options={{
              title: "Dishes",
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name='Place'
            component={PlaceScreen}
            title={"Place"}
            options={{
              title: "Place",
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name='Dish'
            component={DishScreen}
            title={"Dish"}
            options={{
              title: "Dish",
              headerShown: false,
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
