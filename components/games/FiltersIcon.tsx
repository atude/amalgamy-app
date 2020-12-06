import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

export default function FiltersIcon() {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather name="filter" size={16} color="white" />
    </TouchableOpacity>
  );
}

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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
