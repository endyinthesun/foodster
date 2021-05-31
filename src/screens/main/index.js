import React, { useState } from "react";
import { View, Text, TouchableHighlight, Button, Alert, Pressable, StyleSheet } from "react-native";
import { Colors } from "_styles";
import { Btn } from "_atoms";
import { TopMain } from "_organisms";
export default function MainScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  return (
    <View style={{ flex: 1 }}>
      {/*<Btn title='apply filters' handle={() => setCount(count + 1)} type='number' num={3} />*/}
      {/*<Text>{count}</Text>*/}
      <TopMain city={"london"} />
    </View>
  );
}
