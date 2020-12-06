import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import layout from "../../constants/ScreenLayout";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { ListItem } from "react-native-elements";

type Props = {
  title: string;
  icon?: string;
  remove(value: string): void;
  add(value: string): void;
  parentFilters: string[];
};
export default function CategoryValueCheckbox(props: Props) {
  const [selected, setSelected] = useState(false);
  const handleSelect = (): void => {
    if (selected) {
      props.remove(props.title);
    } else {
      props.add(props.title);
    }
    setSelected(!selected);
  };
  useEffect(() => {
    if (props.parentFilters.includes(props.title)) {
      setSelected(true);
    }
  });
  return (
    <TouchableOpacity onPress={handleSelect}>
      <View>
        <ListItem style={styles.container} bottomDivider>
          {selected ? (
            <Ionicons
              name="ios-checkbox"
              size={24}
              color={Colors.light.primary}
            />
          ) : (
            <Ionicons
              name="ios-checkbox-outline"
              size={24}
              color={Colors.light.primary}
            />
          )}
          <ListItem.Content>
            <ListItem.Title style={styles.text}>{props.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
  },
  text: {
    color: Colors.light.darkgrey,
    fontSize: 14,
    fontWeight: "500",
    paddingLeft: 10,
  },
  selectedText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    paddingLeft: 10,
  },
});
