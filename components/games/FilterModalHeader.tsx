import { Feather } from '@expo/vector-icons';
import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import layout from "../../constants/ScreenLayout";
type Props = {
    
}
export default function FilterModalHeader(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.primary,
    width: layout.window.width,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "400",
    color: "white",
    letterSpacing: 1.5,
  },
});
