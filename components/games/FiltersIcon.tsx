import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

type Props = {
    onPress(): void;
}
export default function FiltersIcon(props: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Feather name="filter" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.darkgrey,
    borderRadius: 100,
    height: 40,
    width: 40,
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
