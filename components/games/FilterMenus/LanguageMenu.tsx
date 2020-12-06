import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Colors from "../../../constants/Colors";
import layout from "../../../constants/ScreenLayout";
import { languageList } from "../../../constants/FilterValues";
import CategoryValueCheckbox from "../CategoryValueCheckbox";
import Searchbar from "../Searchbar";
import { useState } from "react";
type Props = {
  languageFilters: string[];
  addLanguage(value: string): void;
  removeLanguage(value: string): void;
};
export default function LanguageMenu(props: Props) {
  const [filtered, setFiltered] = useState(languageList);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search for Languages..."
        list={languageList}
        setFiltered={setFiltered}
      />
      <ScrollView style={{ flexGrow: 1 }}>
        {filtered.map((languageName: string, i: number) => {
          return (
            <CategoryValueCheckbox
              key={i}
              add={props.addLanguage}
              remove={props.removeLanguage}
              title={languageName}
              parentFilters={props.languageFilters}
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
