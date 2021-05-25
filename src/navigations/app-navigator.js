import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "_scenes/main";
import RestaurantsScreen from "_scenes/restaurants";
// import MyOrderScreen from "_scenes/my-order";
// import PromotionsScreen from "_scenes/promotions";
// import ProfileScreen from "_scenes/profile";

// const TabNavigatorConfig = {
//   initialRouteName: "Home",
//   header: null,
//   headMode: "none",
// };
// const RouteConfig = {
//   Main: {
//     screen: MainScreen,
//   },
// Restaurants: {
//   screen: RestaurantsScreen,
// },
// MyOrder: {
//   screen: MyOrderScreen,
// },
// Promotions: {
//   screen: PromotionsScreen,
// },
// Profile: {
//   screen: ProfileScreen,
// },
// };
// const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
const Tab = createBottomTabNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Main' component={MainScreen} />
        <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
