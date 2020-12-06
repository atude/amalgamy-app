import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, View } from "../Themed";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { Option } from "../../types/index";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../../constants/GlobalStyles";
import { CheckBox } from "react-native-elements";

type Props = {
  optionText: string;
  checked: boolean;
};

const MenuItemWithCheck = (props: Props) => {
  const { optionText, checked } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={[styles.optionText, GlobalStyles.styles.paragraphText]}>
          {optionText}
        </Text>
        <View style={styles.iconContainer}>
          <CheckBox checked={false} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItemWithCheck;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: Colors.light.lightgrey3,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  optionText: {
    alignSelf: "flex-start",
  },
  valueText: {
    alignSelf: "flex-start",
    color: Colors.light.grey2,
  },
  iconContainer: {
    alignSelf: "center",
    alignItems: "flex-end",
  },
});
