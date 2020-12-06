import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import { Text, View } from "../Themed";
import { ColorScheme, User } from "../../types";
import Colors from "../../constants/Colors";
import { Avatar } from "react-native-elements";
// import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../context";

type Props = {
  friend: User;
  lastItem?: boolean;
};

const FriendListItem = (props: Props) => {
  const colorScheme: ColorScheme = useColorScheme() ?? "light";
  const navigation = useNavigation();
  const { setChatReceiver } = useContext(AppContext);
  const styles = createStyles(colorScheme);
  const { friend, lastItem } = props;

  const handleClickChat = () => {
    setChatReceiver({
      email: friend.email,
      firstName: friend.firstName,
      lastName: friend.lastName,
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
      onPress={() => handleClickChat()}
    >
      <Avatar
        title={`${friend.firstName[0]}${friend.lastName[0]}`}
        containerStyle={styles.avatar}
      />
      <View style={styles.details}>
        <View style={styles.detailsTopRow}>
          <Text style={styles.friendName}>
            {friend.firstName} {friend.lastName}
          </Text>
          <View style={styles.detailsTopRight}>
            {/* <Entypo
              name="notification"
              size={16}
              style={styles.unreadIcon}
              color={Colors[colorScheme].red}
            /> */}
            <Text>1/2</Text>
          </View>
        </View>
        <Text style={styles.playingNow}>Playing Among Us</Text>
        <Text style={styles.playingNow}>Looking for a player</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FriendListItem;

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
    unreadIcon: {
      marginRight: 6,
    },
  });
