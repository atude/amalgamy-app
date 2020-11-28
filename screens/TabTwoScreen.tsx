import * as React from "react";
import { useContext } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { AppContext } from "../context";

const TabTwoScreen = () => {
  const context = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two - {context.check}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default TabTwoScreen;
