import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import Loading from "../components/shared/Loading";
import FriendListItem from "../components/social/FriendListItem";
import UserListItem from "../components/social/UserListItem";

import { ScrollableLayout, Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { AppContext } from "../context";
import { getUsers } from "../functions/users";
import { ColorScheme, User } from "../types";

const SocialScreen = () => {
  const colorScheme = useColorScheme() ?? "light";
  const styles = createStyles(colorScheme);
  const { user } = useContext(AppContext);
  const [friends, setFriends] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [searchUsers, setSearchUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsersAndFriends = async () => {
    setLoading(true);
    const currUsersAll = await getUsers();
    const currUsers = currUsersAll.filter(
      (thisUser) => thisUser.email !== user?.email,
    );
    const friendEmails = user?.friendEmails;
    const filteredFriends = currUsers.filter((user) =>
      friendEmails?.includes(user.email),
    );
    setUsers(currUsers);
    setFriends(filteredFriends);
    setLoading(false);
  };

  useEffect(() => {
    if (users.length && search.length) {
      setLoading(true);
      fetchUsersAndFriends();
      setSearchUsers(
        users.filter(
          (thisUser) =>
            thisUser.email !== user?.email &&
            (thisUser.firstName.toLowerCase().includes(search.toLowerCase()) ||
              thisUser.lastName.toLowerCase().includes(search.toLowerCase())),
        ),
      );
      setLoading(false);
    }
  }, [search, user]);

  useEffect(() => {
    fetchUsersAndFriends();
  }, []);

  return (
    <ScrollableLayout>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search for friends or any user..."
            onChangeText={(e) => setSearch(e)}
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
      <Loading loading={loading} />
      {!!search.trim().length ? (
        <View>
          <Text style={styles.searchLength}>
            {searchUsers.length} users found
          </Text>
          {searchUsers.map((user, i) => (
            <UserListItem
              key={user.email}
              foundUser={user}
              lastItem={i === searchUsers.length - 1}
            />
          ))}
        </View>
      ) : (
        friends.map((friend, i) => (
          <FriendListItem
            key={friend.email}
            friend={friend}
            lastItem={i === friends.length - 1}
          />
        ))
      )}
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
    searchLength: {
      alignSelf: "center",
      color: Colors[colorScheme].darkgrey,
    },
  });

export default SocialScreen;
