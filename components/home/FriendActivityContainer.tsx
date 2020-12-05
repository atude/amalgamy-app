import * as React from "react";
import { StyleSheet } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import { DUMMY_FRIEND_ACTIVITY } from "../../data/_dummyData";
import { Text, View } from "../Themed";
import FriendActivity from "./FriendActivity";

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
