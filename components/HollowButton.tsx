import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import useColorScheme from "../hooks/useColorScheme";

import Colors from "../constants/Colors";
interface IHollowButtonProps {
  onPress: any;
  text: string;
  // icon: any;
}

const HollowButton: React.FC<IHollowButtonProps> = (
  props: IHollowButtonProps,
) => {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[styles.container, { borderColor: Colors[colorScheme].primary }]}
      >
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
});
export default HollowButton;
