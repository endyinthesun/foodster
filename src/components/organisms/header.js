import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

//components
import { BackBtn, Logo, Location, InfoBtn, SearchBtn } from "@atoms/index";

//styles
import { WHITE, TRANSPARENT } from "@styles/colors";
import { FONT_FAMILY_MEDIUM, FONT_SIZE_16 } from "@styles/typography";
import { PADDING_HORIZONTAL } from "@styles/spacing";
import { SearchField, SearchBar } from "@molecules/index";

//type = [onlyTitle, titleSearch, withLogo, onlyBack, infoSearch]
export default function Header({ type, title, navigation = null }) {
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
      <View
        style={[
          styles.roundedLeft,
          {
            backgroundColor: switcher ? WHITE : TRANSPARENT,
            alignSelf: logo ? "flex-start" : "center",
            marginTop: logo ? 14 : 0,
            height: logo ? "auto" : "100%",
          },
        ]}
      >
        {back ? (
          <BackBtn onPress={navigation.goBack} style={styles.paddingBtn} />
        ) : logo ? (
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <Logo style={[styles.paddingBtn, { alignSelf: "flex-start" }]} />
          </TouchableOpacity>
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
      <>
        <View style={[styles.roundedRight, { backgroundColor: switcher ? WHITE : TRANSPARENT }]}>
          {location ? (
            <Location city={city} style={styles.paddingBtn} />
          ) : info ? (
            <InfoBtn style={styles.paddingBtn} />
          ) : null}
        </View>
      </>
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
    default:
      customProps.typeLeft = null;
      customProps.text = null;
      customProps.typeRight = "none";
  }

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: switcher ? TRANSPARENT : WHITE,
          borderBottomLeftRadius: switcher ? 0 : 20,
          borderBottomRightRadius: switcher ? 0 : 20,
        },
      ]}
    >
      <View style={[styles.sideWrapper, {}]}>
        <Left typeLeft={customProps.typeLeft} />
      </View>
      <Title text={customProps.text} />
      <View style={[styles.sideWrapper, { justifyContent: "flex-end" }]}>
        <Right typeRight={customProps.typeRight} city={"london"} />
      </View>
      {type === "onlyBack" ? null : <SearchBar />}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 54,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 3,
    overflow: "hidden",
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
    // flexDirection: "row",
    flexDirection: "row",
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
