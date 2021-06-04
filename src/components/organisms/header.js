import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

//components
import { BackBtn, Logo, Location, InfoBtn, SearchBtn } from "@atoms";

//styles
import { WHITE, TRANSPARENT } from "@styles/colors";
import { FONT_FAMILY_MEDIUM, FONT_SIZE_16 } from "@styles/typography";
import { PADDING_HORIZONTAL } from "@styles/spacing";

//onlyTitle, titleSearch, withLogo, onlyBack, infoSearch
export default function Header({ type, title, navigation: { goBack } }) {
  const switcher = type === "onlyBack" || type === "infoSearch";

  let customProps = {
    typeLeft: null,
    text: null,
    typeRight: null,
  };
  const Left = ({ typeLeft }) => {
    const back = typeLeft === "back";
    const logo = typeLeft === "logo";
    return (
      <View style={[styles.roundedLeft, { backgroundColor: switcher ? WHITE : TRANSPARENT }]}>
        {back ? (
          <BackBtn onPress={goBack} style={styles.paddingBtn} />
        ) : logo ? (
          <Logo style={styles.paddingBtn} />
        ) : null}
      </View>
    );
  };
  const Title = ({ text }) => (text ? <Text style={styles.title}>{text}</Text> : null);
  const Right = ({ typeRight, city }) => {
    const location = typeRight === "location";
    const info = typeRight === "info";
    const none = typeRight === "none";
    return none ? null : (
      <View style={[styles.roundedRight, { backgroundColor: switcher ? WHITE : TRANSPARENT }]}>
        {location ? (
          <Location city={city} style={styles.paddingBtn} />
        ) : info ? (
          <InfoBtn style={styles.paddingBtn} />
        ) : null}
        <SearchBtn style={styles.paddingBtn} />
      </View>
    );
  };

  switch (type) {
    case "onlyTitle":
      customProps.typeLeft = "back";
      customProps.text = title;
      customProps.typeRight = "none";
      break;
    case "titleSearch":
      customProps.typeLeft = "back";
      customProps.text = title;
      break;
    case "withLogo":
      customProps.typeLeft = "logo";
      customProps.typeRight = "location";
      break;
    case "onlyBack":
      customProps.typeLeft = "back";
      customProps.typeRight = "none";
      break;
    case "infoSearch":
      customProps.typeLeft = "back";
      customProps.typeRight = "info";
      break;
  }

  return (
    <View style={[styles.header, { backgroundColor: switcher ? TRANSPARENT : WHITE }]}>
      <View style={styles.sideWrapper}>
        <Left typeLeft={customProps.typeLeft} />
      </View>
      <Title text={customProps.text} />
      <View style={[styles.sideWrapper, { justifyContent: "flex-end" }]}>
        <Right typeRight={customProps.typeRight} city={"london"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 54,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sideWrapper: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 5,
    textAlign: "center",
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: FONT_SIZE_16,
  },
  roundedLeft: {
    paddingLeft: PADDING_HORIZONTAL - 10,
    paddingRight: 20,
    alignItems: "center",
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
  },
  roundedRight: {
    paddingLeft: 20,
    paddingRight: PADDING_HORIZONTAL - 10,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
  },
  paddingBtn: {
    paddingHorizontal: 10,
  },
});
