import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import layout from "../../constants/ScreenLayout";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";

type Props = {
  title: string;
  icon?: string;
  remove(value: string): void;
  add(value: string): void;
  parentFilters: string[];
};
export default function CategoryValueButton(props: Props) {
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
      <View style={selected ? styles.containerSelected : styles.container}>
        {props.icon ? (
          <FontAwesome
            name={props.icon}
            size={24}
            style={selected ? styles.selectedText : styles.text}
          />
        ) : null}
        <Text style={selected ? styles.selectedText : styles.text}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 30,
    marginRight: 15,
    paddingLeft: 10,
    paddingRight: 18,
    backgroundColor: Colors.light.lightgrey2,
  },
  containerSelected: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 30,
    marginRight: 15,
    paddingLeft: 10,
    paddingRight: 18,
    backgroundColor: Colors.light.primary,
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
