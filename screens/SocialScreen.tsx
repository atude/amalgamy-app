import * as React from "react";
import { useContext } from "react";
import { StyleSheet, TextInput, useColorScheme } from "react-native";

import { Layout, Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import { AppContext } from "../context";
import { ColorScheme } from "../types";

const SocialScreen = () => {
  const context = useContext(AppContext);
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  return (
    <Layout>
      <View style={styles.searchHeader}>
        <TextInput style={styles.searchBar} inlineImageLeft="search_icon" />
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
    searchHeader: {},
    searchBar: {
      backgroundColor: Colors[colorScheme].lightgrey3,
      borderRadius: 20,
      padding: 12,
    },
  });

export default SocialScreen;
