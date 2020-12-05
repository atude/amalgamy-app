import * as React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import FiltersIcon from "./FiltersIcon";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
type Props = {
  children: JSX.Element;
};
const CategoryValueContainer = (props: Props) => {
  return (
    <ScrollView style={styles.scrollContainer} horizontal>
      {props.children}
      <FiltersIcon />
      <FiltersIcon />
      <TouchableOpacity style={styles.container}>
      </TouchableOpacity>
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
      <FiltersIcon />
    </ScrollView>
  );
};

export default CategoryValueContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.darkgrey,
    borderRadius: 100,
    height: 30,
    width: 30,
    padding: 5,
    paddingTop: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    overflow: "visible",
    marginBottom: 10,
  },
  text: {
    color: Colors.light.darkgrey,
    fontSize: 24,
    fontWeight: "500",
    paddingLeft: 10,
  },
});
