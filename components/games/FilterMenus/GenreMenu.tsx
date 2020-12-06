import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Colors from "../../../constants/Colors";
import layout from "../../../constants/ScreenLayout";
import { genresList } from "../../../constants/FilterValues";
import CategoryValueCheckbox from "../CategoryValueCheckbox";
import Searchbar from "../Searchbar";
import { useState } from "react";
type Props = {
  genreFilters: string[];
  addGenre(value: string): void;
  removeGenre(value: string): void;
};
export default function GenreMenu(props: Props) {
  const [filtered, setFiltered] = useState(genresList);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search for Genres..."
        list={genresList}
        setFiltered={setFiltered}
      />
      <ScrollView style={{ flexGrow: 1 }}>
        {filtered.map((genreName: string, i: number) => {
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
        <View style={{ height: 350 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: layout.window.width,
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
