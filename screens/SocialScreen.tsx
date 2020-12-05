import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, TextInput, useColorScheme } from "react-native";

import { Layout, Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import { ColorScheme } from "../types";

const SocialScreen = () => {
  const colorScheme = useColorScheme() ?? "light";
  const styles = createStyles(colorScheme);

  return (
    <Layout>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} />
        <Ionicons
          name="ios-search"
          size={20}
          color={Colors[colorScheme].grey2}
        />
      </View>
    </Layout>
  );
};

const createStyles = (colorScheme: ColorScheme) =>
  StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: Colors[colorScheme].lightgrey3,
      borderRadius: 20,
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    searchInput: {
      width: "85%",
    },
  });

export default SocialScreen;
