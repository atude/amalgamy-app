import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, View } from "../Themed";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { Option } from "../../types/index";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  option: Option;
};

const ProfileMenuItem = (props: Props) => {
  const { optionText, pageLink, icon, valueText } = props.option;
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(pageLink)}>
      <View style={styles.container}>
        <Text style={styles.optionText}>{optionText}</Text>
        <View style={styles.iconContainer}>
          {icon && <Ionicons name={icon} size={20} color="black" />}
        </View>
        {valueText && <Text style={styles.valueText}>{valueText}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;

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
