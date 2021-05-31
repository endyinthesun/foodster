import React, { useState } from "react";
import { View, Text, TouchableHighlight, Button, Alert, Pressable, StyleSheet } from "react-native";
import { Colors } from "_styles";
import { Btn } from "_atoms";

function MainScreen({ navigation }) {
  const [count, setCount] = useState(0);
  return (
    <View style={{ padding: 50 }}>
      <TouchableHighlight onPress={() => navigation.navigate("Main")}>
        <>
          <Btn title='apply filters' handle={() => setCount(count + 1)} type='number' num={3} />
          <Text>{count}</Text>
        </>
      </TouchableHighlight>
    </View>
  );
}

export default MainScreen;
