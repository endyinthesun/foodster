import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, Animated, useWindowDimensions, Easing } from "react-native";

//styles
import { WHITE, WHITE_TRANSPARENT } from "@styles/colors";

export default function FadeBg({ toggle }) {
  //calculate window size
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const { Value, timing } = Animated;

  const [bgTranslateY] = useState(new Value(height));
  const [bgOpacity] = useState(new Animated.Value(0));

  const fadeIn = () => {
    const bgTranslateYConf = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };
    const bgOpacityConf = {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    };
    timing(bgTranslateY, bgTranslateYConf).start();
    timing(bgOpacity, bgOpacityConf).start();
  };

  const fadeOut = () => {
    const bgTranslateYConf = {
      delay: 200,
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };
    const bgOpacityConf = {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    };
    timing(bgTranslateY, bgTranslateYConf).start();
    timing(bgOpacity, bgOpacityConf).start();
  };

  useEffect(() => {
    if (toggle) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [toggle]);

  return (
    <Animated.View
      style={[styles.bg, { opacity: bgOpacity, transform: [{ translateY: bgTranslateY }] }]}
    >
      <LinearGradient
        colors={[WHITE_TRANSPARENT, "rgba(255, 255, 255, 0.9)", WHITE]}
        locations={[0, 0.4, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1 }}
      ></LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 4,
  },
});
