import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import Colors from "../../constants/Colors";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Layout } from "../Themed";
import layout from "../../constants/ScreenLayout";

type Props = {
  placeholder: string;
  list: string[];
  setFiltered(list: string[]): void;
};
export default function Searchbar(props: Props) {
  const { list, setFiltered } = props;
  const [search, setSearch] = useState("");
  const handleSearch = (value: string) => {
    const filtered = list.filter((item) => {
      return item.includes(value);
    });
    setFiltered(filtered);
    setSearch(value);
  };
  const clearSearch = () => {
    setSearch("");
    setFiltered(list);
  };
  return (
    <View style={styles.searchBar}>
      <TextInput
        onChangeText={(value) => handleSearch(value)}
        placeholder={props.placeholder}
        value={search}
        style={styles.searchInput}
      />
      {search !== "" ? (
        <TouchableOpacity style={styles.clear} onPress={() => clearSearch()}>
          <Ionicons name="ios-close" size={20} color={Colors.light.grey2} />
        </TouchableOpacity>
      ) : (
        <Ionicons name="ios-search" size={20} color={Colors.light.grey2} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.light.lightgrey3,
    width: "90%",
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  searchInput: {
    width: "90%",
  },
  clear: {
    alignItems: "flex-end",
    width: 40,
    paddingRight: 15,
  },
});
