import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import layout from "../../constants/ScreenLayout";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";

type Props = {
  min: number;
  max: number;
  title: string;
  setPriceMin(value: number): void;
  setPriceMax(value: number): void;
  priceMin: number;
  priceMax: number;
};
export default function PriceValueButton(props: Props) {
  const [selected, setSelected] = useState(false);
  const { min, max, priceMin, priceMax, setPriceMin, setPriceMax } = props;
  const handleSelect = (): void => {
    if (selected) {
      setPriceMin(-1);
      setPriceMax(-1);
    } else {
      setPriceMin(min);
      setPriceMax(max);
    }
    setSelected(!selected);
  };
  useEffect(() => {
    if (priceMin === min && priceMax === max) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  });
  return (
    <TouchableOpacity onPress={handleSelect}>
      <View style={selected ? styles.containerSelected : styles.container}>
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
