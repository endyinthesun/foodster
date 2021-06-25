import React, { useCallback } from "react";

import { Text, View, StyleSheet, Linking, Alert, Pressable } from "react-native";

export default function OpenUrlText({ url, styles, children }) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return (
    <Pressable onPress={() => handlePress()}>
      <Text style={styles}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
