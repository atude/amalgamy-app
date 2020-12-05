import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import ProfileMenuItem from "./ProfileMenuItem";
import { Option } from "../../types/index";

type Props = {
  options: Option[];
  title?: string;
  firstItem?: boolean;
};

export const ProfileMenuWrapper = (props: Props) => {
  const { options, title, firstItem } = props;
  return (
    <View style={styles.menuContainer}>
      {title && (
        <Text style={firstItem ? styles.title2 : styles.title}>{title}</Text>
      )}
      {options.map((option, i) => (
        <ProfileMenuItem option={option} key={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    alignContent: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 15,
  },
  title2: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
