import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Styles
import { Colors, Typography } from "_styles";

//Styles value
const { SECONDARY, BLUE } = Colors;
const { FONT_SIZE_12, FONT_FAMILY_REGULAR, FONT_FAMILY_MEDIUM } = Typography;

export default function TabItem(name, component, icon, iconActive) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Screen
      key={name}
      name={name}
      component={component}
      options={{
        tabBarIcon: ({ focused }) => {
          const Icon = focused ? iconActive : icon;
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {Icon}
              <Text
                style={{
                  color: focused ? BLUE : SECONDARY,
                  fontSize: FONT_SIZE_12,
                  fontFamily: focused ? FONT_FAMILY_MEDIUM : FONT_FAMILY_REGULAR,
                  marginTop: 6,
                }}
              >
                {name}
              </Text>
            </View>
          );
        },
        title: { name },
      }}
    />
  );
}
