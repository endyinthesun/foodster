import { createAppContainer, createSwitchNavigator } from "react-navigation";

// import AuthNavigator from "./auth-navigator";
// import AppNavigator from "./app-navigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "_scenes/main";
import RestaurantsScreen from "_scenes/restaurants";
// const RootNavigator = createSwitchNavigator(
//   {
//     Auth: AuthNavigator,
//     App: AppNavigator,
//   },
//   {
//     initialRouteName: "Auth",
//   }
// );
const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={MainScreen} />
        <Tab.Screen name='Settings' component={RestaurantsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;
