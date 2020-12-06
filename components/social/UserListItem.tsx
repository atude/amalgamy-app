import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import { Text, View } from "../Themed";
import { ColorScheme, User } from "../../types";
import Colors from "../../constants/Colors";
import { Avatar } from "react-native-elements";
import { AppContext } from "../../context";
import { addFriend, getUser, removeFriend } from "../../functions/users";
import { useNavigation } from "@react-navigation/native";

type Props = {
  foundUser: User;
  lastItem?: boolean;
};

const UserListItem = (props: Props) => {
  const colorScheme: ColorScheme = useColorScheme() ?? "light";
  const styles = createStyles(colorScheme);
  const navigation = useNavigation();
  const { user, setUser, setChatReceiver } = useContext(AppContext);
  const { foundUser, lastItem } = props;

  const handleAddFriend = async () => {
    if (user) {
      await addFriend(user.email, foundUser.email);
      const updateUser = await getUser(user.email);
      setUser({
        ...user,
        friendEmails: updateUser?.friendEmails,
      });
    }
  };

  const handleRemoveFriend = async () => {
    if (user) {
      await removeFriend(user.email, foundUser.email);
      const updateUser = await getUser(user.email);
      setUser({
        ...user,
        friendEmails: updateUser?.friendEmails,
      });
    }
  };

  const handleClickChat = () => {
    setChatReceiver({
      email: foundUser.email,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
    });
    navigation.navigate("ChatScreen");
  };

  return (
    <TouchableOpacity
      style={
        lastItem
          ? [styles.container, styles.containerLastItem]
          : styles.container
      }
      disabled={!user?.friendEmails?.includes(foundUser.email)}
      onPress={() => handleClickChat()}
    >
      <Avatar
        title={`${foundUser.firstName[0]}${foundUser.lastName[0]}`}
        containerStyle={styles.avatar}
      />
      <View style={styles.details}>
        <View style={styles.detailsTopRow}>
          <Text style={styles.friendName}>
            {foundUser.firstName} {foundUser.lastName}
          </Text>
        </View>
        <Text style={styles.playingNow}>Playing some game</Text>
      </View>
      {!user?.friendEmails?.includes(foundUser.email) ? (
        <TouchableOpacity
          style={styles.addFriendButton}
          onPress={handleAddFriend}
          disabled={!user}
        >
          <Text style={styles.addFriendText}>Add to Friends</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.removeFriendButton}
          onPress={handleRemoveFriend}
          disabled={!user}
        >
          <Text style={styles.removeFriendText}>Remove Friend</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default UserListItem;

const createStyles = (colorScheme: ColorScheme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: 4,
      borderBottomColor: Colors[colorScheme].lightgrey3,
      borderRadius: GlobalStyles.consts.borderRadius,
      borderBottomWidth: 1,
      marginTop: 4,
      paddingBottom: 8,
      height: 90,
    },
    containerLastItem: {
      borderBottomColor: "rgba(0,0,0,0)",
    },
    avatar: {
      backgroundColor: Colors[colorScheme].grey2,
      width: 60,
      height: 60,
      borderRadius: 1000,
      borderColor: Colors[colorScheme].primary,
      borderWidth: 1,
    },
    details: {
      flex: 1,
      marginLeft: 14,
    },
    detailsTopRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    detailsTopRight: {
      flexDirection: "row",
      alignItems: "center",
    },
    friendName: {
      fontWeight: "bold",
    },
    playingNow: {},
    addFriendButton: {
      paddingVertical: 14,
      paddingHorizontal: 8,
      borderRadius: 11,
      borderWidth: 1,
      borderColor: Colors[colorScheme].primary,
    },
    addFriendText: {
      color: Colors[colorScheme].primary,
    },
    removeFriendButton: {
      paddingVertical: 14,
      paddingHorizontal: 8,
      borderRadius: 11,
      borderWidth: 1,
      borderColor: Colors[colorScheme].red,
    },
    removeFriendText: {
      color: Colors[colorScheme].red,
    },
  });
