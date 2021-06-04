import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
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
import Back from "@icons/back.svg";
import Search from "@icons/search.svg";

//Screens
import {
  MainScreen,
  RestaurantsScreen,
  MyOrderScreen,
  PromotionsScreen,
  ProfileScreen,
  PlacesScreen,
  MoreDishesScreen,
} from "@screens";

//components
import { BottomBar } from "@organisms";

export default function AppNavigator() {
  const Root = createBottomTabNavigator();
  const MainStack = createStackNavigator();

  const MainStackScreen = () => (
    <MainStack.Navigator>
      <MainStack.Screen name='Categories' component={MainScreen} options={{ headerShown: false }} />
      <MainStack.Screen name='Dish' component={PlacesScreen} options={{ headerShown: false }} />
      <MainStack.Screen
        name='MoreDishes'
        component={MoreDishesScreen}
        title={"Dishes"}
        options={{
          title: "Dishes",
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );

  return (
    <View style={{ flex: 1, backgroundColor: WHITE }}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Root.Navigator tabBarVisible={false} tabBar={(props) => <BottomBar {...props} />}>
            <Root.Screen
              name='Main'
              component={MainStackScreen}
              options={{ icon: <MainIcon />, iconActive: <MainActiveIcon /> }}
            />
            <Root.Screen
              name='Restaurants'
              component={RestaurantsScreen}
              options={{ icon: <PlacesIcon />, iconActive: <PlacesActiveIcon /> }}
            />
            <Root.Screen
              name='My order'
              component={MyOrderScreen}
              options={{ icon: <BagIcon />, iconActive: <BagActiveIcon /> }}
            />
            <Root.Screen
              name='Promotions'
              component={PromotionsScreen}
              options={{ icon: <PromoIcon />, iconActive: <PromoActiveIcon /> }}
            />
            <Root.Screen
              name='Profile'
              component={ProfileScreen}
              options={{ icon: <UserIcon />, iconActive: <UserActiveIcon /> }}
            />
          </Root.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
