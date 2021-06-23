import React, { useState } from "react";

import { Text, View, StyleSheet, Animated } from "react-native";
import { WHITE_TRANSPARENT } from "@styles/colors";

export default function AnimatedBg({ active }) {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  if (active) {
    fadeIn();
  } else if (active) {
    fadeOut();
  }
  return <Animated.View style={[styles.bg, { opacity: opacity }]}></Animated.View>;
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: WHITE_TRANSPARENT,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },
});
