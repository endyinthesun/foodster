import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

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

//Custom bottom bar
import { BottomBar } from "@organisms";

export default function AppNavigator() {
  const Tab = createBottomTabNavigator();
  const MainStack = createStackNavigator();

  const MainStackScreen = () => (
    <MainStack.Navigator>
      <MainStack.Screen name='Categories' component={MainScreen} options={{ headerShown: false }} />
      <MainStack.Screen name='Dish' component={PlacesScreen} />
      <MainStack.Screen
        name='MoreDishes'
        component={MoreDishesScreen}
        title={"Dishes"}
        options={{
          title: "Dishes",
          headerShown: false,
          // headerStyle: styles.header,
          // header: ({ scene, previous, navigation }) => {
          //   const { options } = scene.descriptor;
          //   const title =
          //     options.headerTitle !== undefined
          //       ? options.headerTitle
          //       : options.title !== undefined
          //       ? options.title
          //       : scene.route.name;
          //   const backBtn = previous ? (
          //     <Pressable onPress={navigation.goBack}>
          //       <Back />
          //     </Pressable>
          //   ) : undefined;
          //   return (
          //     <View style={options.headerStyle}>
          //       {backBtn}
          //       <Text>{title}</Text>
          //       <Search />
          //     </View>
          //   );
          // },
        }}
      />
    </MainStack.Navigator>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator tabBarVisible={false} tabBar={(props) => <BottomBar {...props} />}>
          <Tab.Screen
            name='Main'
            component={MainStackScreen}
            options={{ icon: <MainIcon />, iconActive: <MainActiveIcon /> }}
          />
          <Tab.Screen
            name='Restaurants'
            component={RestaurantsScreen}
            options={{ icon: <PlacesIcon />, iconActive: <PlacesActiveIcon /> }}
          />
          <Tab.Screen
            name='My order'
            component={MyOrderScreen}
            options={{ icon: <BagIcon />, iconActive: <BagActiveIcon /> }}
          />
          <Tab.Screen
            name='Promotions'
            component={PromotionsScreen}
            options={{ icon: <PromoIcon />, iconActive: <PromoActiveIcon /> }}
          />
          <Tab.Screen
            name='Profile'
            component={ProfileScreen}
            options={{ icon: <UserIcon />, iconActive: <UserActiveIcon /> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
