import React, { useState, useRef, useEffect } from "react";

import {
  Animated,
  Easing,
  View,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
} from "react-native";

//SVGs
import Search from "@icons/search.svg";
import Back from "@icons/back.svg";

//styles
import { PADDING_HORIZONTAL } from "@styles/spacing";
import { WHITE } from "@styles/colors";
import { FONT_SIZE_16 } from "@styles/typography";

//store
import { searchStore } from "@store/index";

export default function SearchBar() {
  const inputSearch = useRef();

  //calculate window size
  const width = useWindowDimensions().width;

  const { Value, timing } = Animated;
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, changeKeyword] = useState("");

  //animations value
  const [inputBoxTranslateX] = useState(new Value(width));
  const [backButtonOpacity] = useState(new Value(0));

  const onFocus = () => {
    const inputBoxTranslateXConf = {
      duration: 400,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };
    const backButtonOpacityConf = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };

    //run animation
    timing(inputBoxTranslateX, inputBoxTranslateXConf).start();
    timing(backButtonOpacity, backButtonOpacityConf).start();

    setIsFocused(true);
  };

  const onBlur = () => {
    const inputBoxTranslateXConf = {
      duration: 200,
      toValue: width,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };
    const backButtonOpacityConf = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };

    //run animation
    timing(inputBoxTranslateX, inputBoxTranslateXConf).start();
    timing(backButtonOpacity, backButtonOpacityConf).start();

    setIsFocused(false);
  };
  useEffect(() => {
    if (isFocused) {
      inputSearch.current.focus();
      searchStore.toggleIsFocused(true);
    } else {
      searchStore.toggleIsFocused(false);
      inputSearch.current.blur();
    }
  }, [isFocused]);
  useEffect(() => {
    searchStore.changeKeyword(keyword);
  }, [keyword]);

  return (
    <>
      <View style={styles.searchIconWrapper}>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor={"#ccd0d5"}
          onPress={() => {
            onFocus();
          }}
          style={styles.searchIconBox}
        >
          <Search />
        </TouchableHighlight>
      </View>
      <Animated.View
        style={[
          styles.inputBox,
          { width: width - 45, transform: [{ translateX: inputBoxTranslateX }] },
        ]}
      >
        <View style={{ flexDirection: "row", backgroundColor: "white" }}>
          <Animated.View style={{ opacity: backButtonOpacity }}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={"#ccd0d5"}
              onPress={() => {
                onBlur();
              }}
              style={styles.backIconBox}
            >
              <Back />
            </TouchableHighlight>
          </Animated.View>
          <TextInput
            ref={inputSearch}
            placeholder={"search restaurant, dish"}
            value={keyword}
            clearButtonMode={"always"}
            onChangeText={(val) => {
              changeKeyword(val);
            }}
            style={styles.input}
          />
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    zIndex: 3,
  },
  searchIconWrapper: {
    paddingRight: 10,
    width: 40,
    height: "100%",
    backgroundColor: WHITE,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIconBox: {
    width: 40,
    height: 40,
    flexDirection: "row",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  backIconBox: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#e4e6eb",
    borderRadius: 16,
    paddingHorizontal: PADDING_HORIZONTAL,
    fontSize: FONT_SIZE_16,
  },
});
