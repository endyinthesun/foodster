import React, { useState } from "react";
import { Modal, View, StyleSheet, Text, Pressable, SafeAreaView } from "react-native";
import { observer } from "mobx-react-lite";

//SVGs
import Cross from "@icons/cross.svg";

//components
import CuisineFilters from "./cuisine-filters";
import OptionalFilters from "./optional-filters";

//store
import { filtersStore, othersStore } from "@store/index";
import { WHITE, WHITE_TRANSPARENT } from "@styles/colors";
import { FONT_FAMILY_SEMIBOLD, FONT_SIZE_20 } from "@styles/typography";
import { OPTIONAL_FILTERS_DATA, CUISINE_FILTERS_DATA } from "../../assets/data";
import { Btn } from "@atoms/index";

export default observer(function ModalFilterMenu() {
  const [optionalFilter, setOptionalFilter] = useState([]);
  const [cuisineFilter, setCuisineFilter] = useState([]);

  const amountFilters = cuisineFilter.length + optionalFilter.length;
  const closeModal = () => {
    othersStore.toggleModalVisible();
    setOptionalFilter(filtersStore.optionalFilters.slice());
    setCuisineFilter(filtersStore.cuisineFilters.slice());
  };
  const applyFilters = () => {
    filtersStore.setOptionalFilters(optionalFilter);
    filtersStore.setCuisineFilters(cuisineFilter);
    othersStore.toggleModalVisible();
  };

  return (
    <View>
      <Modal
        visible={othersStore.modalVisible}
        animationType={"slide"}
        transparent={true}
        onRequestClose={() => {
          othersStore.toggleModalVisible();
        }}
      >
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Filter</Text>
              <Pressable style={styles.headerIcon} onPress={() => closeModal()}>
                <Cross />
              </Pressable>
            </View>
            <OptionalFilters
              data={OPTIONAL_FILTERS_DATA}
              optionalFilter={optionalFilter}
              setOptionalFilter={setOptionalFilter}
            />
            <CuisineFilters
              data={CUISINE_FILTERS_DATA}
              cuisineFilter={cuisineFilter}
              setCuisineFilter={setCuisineFilter}
            />
            <Btn
              title={"apply filters"}
              type={"number"}
              num={amountFilters}
              handle={applyFilters}
              outStyles={{ marginTop: 24 }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: WHITE_TRANSPARENT,
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: WHITE,
    height: "80%",
    paddingHorizontal: 16,
    paddingVertical: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: FONT_SIZE_20,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  headerIcon: {
    padding: 15,
  },
});
