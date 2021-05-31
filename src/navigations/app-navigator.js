import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

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
import { Colors, Typo } from "_styles";

//Styles value
const { SECONDARY, BLUE } = Colors;
const { FONT_SIZE_12, FONT_FAMILY_REGULAR, FONT_FAMILY_MEDIUM } = Typo;

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={{ flexDirection: "row", paddingTop: 12, paddingBottom: 6 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const Icon = isFocused ? options.iconActive : options.icon;
        return (
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            key={index}
          >
            {Icon}
            <Text
              style={{
                color: isFocused ? BLUE : SECONDARY,
                fontSize: FONT_SIZE_12,
                fontFamily: isFocused ? FONT_FAMILY_MEDIUM : FONT_FAMILY_REGULAR,
                marginTop: 6,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function AppNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator tabBarVisible={false} tabBar={(props) => <MyTabBar {...props} />}>
          <Tab.Screen
            name='Main'
            component={MainScreen}
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
