import React, { useState, useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";

import {
  Animated,
  Easing,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
  Image,
  ScrollView,
} from "react-native";

//SVGs
import Search from "@icons/search.svg";
import Binoculars from "@icons/binoculars.svg";

//styles
import { PADDING_HORIZONTAL } from "@styles/spacing";
import { BG, BLUE } from "@styles/colors";
import { FONT_FAMILY_SEMIBOLD, FONT_SIZE_16, FONT_SIZE_20 } from "@styles/typography";

//store
import { searchStore } from "@store/index";
import { filtersStore } from "../../store";

export default observer(function SearchResult() {
  const inputSearch = useRef();

  //calculate window size
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const { Value, timing } = Animated;

  //animations value
  const [contentTranslateY] = useState(new Value(height));
  const [contentOpacity] = useState(new Value(0));

  const onFocus = () => {
    //content
    const contentTranslateYConf = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };
    const contentOpacityConf = {
      duration: 400,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };

    //run animation
    timing(contentTranslateY, contentTranslateYConf).start();
    timing(contentOpacity, contentOpacityConf).start();
  };

  const onBlur = () => {
    //content
    const contentTranslateYConf = {
      delay: 200,
      duration: 0,
      toValue: -height,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };
    const contentOpacityConf = {
      duration: 100,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    };

    //run animation
    timing(contentTranslateY, contentTranslateYConf).start();
    timing(contentOpacity, contentOpacityConf).start();
  };
  if (searchStore.isFocused) {
    onFocus();
  } else {
    onBlur();
  }
  return (
    <>
      <Animated.View
        style={[
          styles.content,
          {
            width: width,
            height: "100%",
            opacity: contentOpacity,
            transform: [{ translateY: contentTranslateY }],
          },
        ]}
      >
        <SafeAreaView style={styles.contentSafeArea}>
          <View style={styles.contentInner}>
            {/*<View style={styles.separator} />*/}
            {searchStore.keyword === "" ? (
              <View style={styles.imagePlaceholderContainer}>
                {/*<View style={styles.imagePlaceholder}>*/}
                <Binoculars width={150} height={150} style={styles.imagePlaceholder} />
                {/*</View>*/}
                <Text style={styles.imagePlaceholderText}>
                  Enter a few words {"\n"}
                  to search
                </Text>
              </View>
            ) : (
              <ScrollView>
                <View style={styles.searchItem}>
                  <Search style={styles.itemIcon} />
                  <Text>Fake search result 1 </Text>
                </View>
              </ScrollView>
            )}
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
});

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 1,
  },
  contentSafeArea: {
    flex: 1,
  },
  contentInner: {
    backgroundColor: BG,
    flex: 1,
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: "#e6e4eb",
  },
  imagePlaceholderContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  imagePlaceholder: {
    alignSelf: "center",
  },
  imagePlaceholderText: {
    textAlign: "center",
    color: BLUE,
    fontSize: FONT_SIZE_16,
    marginTop: 10,
  },
  searchItem: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#e6e4eb",
    marginLeft: 16,
  },
  itemIcon: {
    marginRight: 15,
  },
});
