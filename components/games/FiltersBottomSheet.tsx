import * as React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
type Props = {
  visible: boolean;
};

const FiltersBottomSheet = () => {
  return (
    <View>
      <Text>Hi</Text>
    </View>
  ); 
};

export default FiltersBottomSheet;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "white",
    paddingTop: 12,
    height: 300,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
