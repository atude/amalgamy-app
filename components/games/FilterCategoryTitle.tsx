import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { Layout } from "../Themed";
import layout from "../../constants/ScreenLayout";

type Props = {
  title: string;
  icon: JSX.Element;
};
export default function FilterCategoryTitle(props: Props) {
  return (
    <View style={styles.container}>
      {props.icon}
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    width: layout.window.width - 40,
    height: 50,
    padding: 30,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    paddingLeft: 10,
  },
});
