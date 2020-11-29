import * as React from "react";
import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import { Text, View } from "../Themed";
import FriendActivity from "./FriendActivity";

const DUMMY_FRIEND_ACTIVITY = [
  {
    gameId: "jsnadf",
    gameName: "ijuasdf msf",
    gameImage: "sda msf",
    friends: [
      {
        id: "yes",
        firstName: "Bob",
        lastName: "Jeremy",
        avatar: "yes",
      },
      {
        id: "yes2",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
    ],
  },
  {
    gameId: "jsnasaddf",
    gameName: "Yes this is a game",
    friends: [
      {
        id: "yes",
        firstName: "Bob",
        lastName: "Jeremy",
        avatar: "yes",
      },
      {
        id: "yes2",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
      {
        id: "yes3",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
      {
        id: "yes4",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
    ],
  },
  {
    gameId: "jsnaasddf",
    gameName: "No friends game",
    friends: [
      {
        id: "yes4",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
      {
        id: "yes4",
        firstName: "Jezza",
        lastName: "Jack",
        avatar: "yes",
      },
      {
        id: "yes4",
        firstName: "Awesome",
        lastName: "Jack",
        avatar: "yes",
      },
    ],
  },
  {
    gameId: "jsnaassdddf",
    gameName: "No friends game",
    friends: [
      {
        id: "yes4",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
    ],
  },
];

const FriendActivityContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.header, GlobalStyles.styles.textHeader]}>
        Friend Activity
      </Text>
      {DUMMY_FRIEND_ACTIVITY.map((activity) => (
        <FriendActivity
          key={activity.gameId}
          gameId={activity.gameId}
          gameName={activity.gameName}
          gameImage={activity.gameImage}
          friends={activity.friends}
        />
      ))}
    </View>
  );
};

export default FriendActivityContainer;

const styles = StyleSheet.create({
  container: {},
  header: {
    marginBottom: 8,
  },
});
