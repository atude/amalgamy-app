import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import ProfileMenuItem from "./ProfileMenuItem";
import { Option } from "../../types/index";

type Props = {
  options: Option[];
  title?: string;
};

export const ProfileMenuWrapper = (props: Props) => {
  const { options, title } = props;
  return (
    <View style={styles.menuContainer}>
      {title && <Text>{title}</Text>}
      {options.map((option, i) => (
        <ProfileMenuItem option={option} key={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignContent: "flex-start",
  },
});
