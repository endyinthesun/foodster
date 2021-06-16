import React, { useState, useEffect } from "react";

//components
import { CheckboxFilter } from "@atoms/index";

//styles
import { StyleSheet, Text, View } from "react-native";
import { FONT_FAMILY_SEMIBOLD, FONT_SIZE_14 } from "@styles/typography";

export default function CuisineFilters({ data, cuisineFilter, setCuisineFilter }) {
  // const [cuisineFilter, setCuisineFilter] = useState([]);
  const addArrElements = (val) => {
    setCuisineFilter([...cuisineFilter, val]);
  };
  const remArrElements = (val) => {
    const index = cuisineFilter.indexOf(val);
    const newArr = [...cuisineFilter.slice(0, index), ...cuisineFilter.slice(index + 1)];
    setCuisineFilter(newArr);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.filterTitle}>Cuisine</Text>
      <View style={styles.filterContainer}>
        {data.map(({ title, id }) => {
          const active = cuisineFilter.includes(title);
          return (
            <CheckboxFilter
              title={title}
              key={id}
              addArrElements={addArrElements}
              remArrElements={remArrElements}
              active={active}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  filterTitle: {
    textTransform: "uppercase",
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_14,
    letterSpacing: 0.5,
  },
});
