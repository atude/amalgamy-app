import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
interface IHollowButtonProps {
  onPress: any;
  text: string;
  icon?: string;
}

const HollowButton: React.FC<IHollowButtonProps> = (
  props: IHollowButtonProps,
) => {
  const colorScheme = useColorScheme();
  let icon;

  if (props.icon) {
    icon = (
      <Ionicons
        name={props.icon}
        style={[{ color: Colors[colorScheme].primary }, styles.icon]}
        size={20}
      />
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[styles.container, { borderColor: Colors[colorScheme].primary }]}
      >
        {icon}
        <Text style={[styles.text, { color: Colors[colorScheme].primary }]}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    flexDirection: "row",
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 10,
    maxHeight: 30,
    marginRight: 16,
    // width: 100,
  },
  text: { fontSize: 14 },
  icon: { marginRight: 4 },
});
export default HollowButton;
