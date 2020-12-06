import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import ScreenLayout from "../../constants/ScreenLayout";
import { Text } from "../Themed";

type Props = {
  name: string;
  text: string;
};

const FullIcon = (props: Props) => (
  <View style={styles.container}>
    <Entypo name={props.name} size={200} color={Colors.light.grey2} />
    <Text style={styles.text}>{props.text}</Text>
  </View>
);

export default FullIcon;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    height: ScreenLayout.window.height / 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    color: Colors.light.subheader,
  },
});
