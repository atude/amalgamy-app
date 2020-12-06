import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../../../constants/Colors";
import layout from "../../../constants/ScreenLayout";
import { genresList } from "../../../constants/FilterValues";
import CategoryValueCheckbox from "../CategoryValueCheckbox";
type Props = {
  genreFilters: string[];
  addGenre(value: string): void;
  removeGenre(value: string): void;
};
export default function FilterModalHeader(props: Props) {
  return (
    <View style={styles.container}>
      {genresList.map((genreName: string, i: number) => {
        return (
          <CategoryValueCheckbox
            key={i}
            add={props.addGenre}
            remove={props.removeGenre}
            title={genreName}
            parentFilters={props.genreFilters}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: layout.window.width,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "400",
    color: "white",
    letterSpacing: 1.5,
  },
});
