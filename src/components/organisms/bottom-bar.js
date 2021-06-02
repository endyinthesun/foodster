import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//Styles
import { Colors, Typo } from "@styles";

//Styles value
const { SECONDARY, BLUE, WHITE } = Colors;
const { FONT_SIZE_12, FONT_FAMILY_REGULAR, FONT_FAMILY_MEDIUM } = Typo;

export default function BottomBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.nav}>
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
            style={styles.tabItem}
            key={index}
          >
            {Icon}
            <Text
              style={{
                ...styles.tabItemText,
                color: isFocused ? BLUE : SECONDARY,
                fontFamily: isFocused ? FONT_FAMILY_MEDIUM : FONT_FAMILY_REGULAR,
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

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    paddingTop: 12,
    paddingBottom: 6,
    backgroundColor: WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabItemText: {
    fontSize: FONT_SIZE_12,
    marginTop: 6,
  },
});
