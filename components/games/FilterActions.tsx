import { AntDesign } from "@expo/vector-icons";
import { preventAutoHide } from "expo-splash-screen";
import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import layout from "../../constants/ScreenLayout";
type Props = {
  applyFilters(): void;
};
export default function FilterActions(props: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: Colors.light.lightgrey2,
          borderTopLeftRadius: 30,
        }}
      >
        <Text style={{ ...styles.text, color: Colors.light.darkgrey }}>
          Clear Filters
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.applyFilters}
        style={{ ...styles.button, borderTopRightRadius: 30 }}
      >
        <Text style={styles.text}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: layout.window.height - 618,
    width: layout.window.width,
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
    height: 100,
    backgroundColor: Colors.light.primary,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
});
