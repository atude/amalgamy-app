import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, View } from "../Themed";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { Option } from "../../types/index";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../../constants/GlobalStyles";
import { CheckBox } from "react-native-elements";
import { useState } from "react";

type Props = {
  option: Option;
};

function onPressAction(checked: boolean) {
  if (checked) {
    setChecked(!checked);
  }
}

const ProfileMenuItem = (props: Props) => {
  const { optionText, pageLink, icon, valueText, checkbox } = props.option;
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        if (!checkbox) {
          navigation.navigate(pageLink);
        } else {
          setChecked(!checked);
        }
      }}
    >
      <View style={checkbox ? styles.checkContainer : styles.container}>
        <Text style={[styles.optionText, GlobalStyles.styles.paragraphText]}>
          {optionText}
        </Text>

        {icon && (
          <View style={styles.iconContainer}>
            <Ionicons name={icon} size={20} color="black" />
          </View>
        )}

        {valueText && (
          <Text style={[styles.valueText, GlobalStyles.styles.paragraphText]}>
            {valueText}
          </Text>
        )}

        {checkbox && <CheckBox checked={checked} />}
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
    alignSelf: "center",
  },
  valueText: {
    alignSelf: "flex-start",
    color: Colors.light.grey2,
  },
  iconContainer: {
    alignSelf: "center",
    alignItems: "flex-end",
  },
  checkContainer: {
    borderBottomWidth: 1,
    borderColor: Colors.light.lightgrey3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
});
