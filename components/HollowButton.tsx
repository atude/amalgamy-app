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
        style={[{ color: Colors[colorScheme].primary }]}
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,

    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 10,
    maxHeight: 30,
  },
  text: { fontSize: 14 },
  icon: {},
});
export default HollowButton;
