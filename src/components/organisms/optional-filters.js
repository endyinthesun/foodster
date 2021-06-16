import React from "react";

//components
import { OptionalFilter } from "@atoms/index";

//styles
import { StyleSheet, View } from "react-native";

export default function OptionalFilters({ data, optionalFilter, setOptionalFilter }) {
  const addArrElements = (val) => {
    setOptionalFilter([...optionalFilter, val]);
  };
  const remArrElements = (val) => {
    const index = optionalFilter.indexOf(val);
    const newArr = [...optionalFilter.slice(0, index), ...optionalFilter.slice(index + 1)];
    setOptionalFilter(newArr);
  };
  return (
    <View style={styles.container}>
      {data.map(({ title, id }) => {
        const active = optionalFilter.includes(title);
        return (
          <OptionalFilter
            title={title}
            key={id}
            activeOptional={active}
            addArrElements={addArrElements}
            remArrElements={remArrElements}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
