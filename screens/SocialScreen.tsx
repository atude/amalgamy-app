import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import FriendListItem from "../components/social/FriendListItem";

import { Layout, ScrollableLayout, Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import { DUMMY_FRIENDS } from "../data/_dummyData";
import { ColorScheme } from "../types";

const SocialScreen = () => {
  const colorScheme = useColorScheme() ?? "light";
  const styles = createStyles(colorScheme);
  const friends = DUMMY_FRIENDS;

  return (
    <ScrollableLayout>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search for friends, groups..."
            style={styles.searchInput}
          />
          <Ionicons
            name="ios-search"
            size={20}
            color={Colors[colorScheme].grey2}
          />
        </View>
        <TouchableOpacity style={styles.createGroupButton}>
          <MaterialIcons
            name="group-add"
            size={32}
            color={Colors[colorScheme].primary}
          />
        </TouchableOpacity>
      </View>
      {friends.map((friend, i) => (
        <FriendListItem
          key={friend.email}
          friend={friend}
          lastItem={i === friends.length - 1}
        />
      ))}
    </ScrollableLayout>
  );
};

const createStyles = (colorScheme: ColorScheme) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    },
    createGroupButton: {
      padding: 6,
      marginLeft: 6,
      borderRadius: 1000,
      borderColor: Colors[colorScheme].primary,
      borderWidth: 1,
    },
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
      paddingHorizontal: 18,
    },
    searchInput: {
      width: "80%",
    },
  });

export default SocialScreen;
