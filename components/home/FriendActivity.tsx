import { Entypo } from "@expo/vector-icons";
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import { formatFriendsActivity } from "../../utils";
import { Text, View } from "../Themed";

type Props = {
  gameId: string;
  gameName: string;
  gameImage?: string;
  friends: Friend[];
};

type Friend = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
};

const FriendActivity = (props: Props) => {
  const { gameId, gameName, friends } = props;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.gameImage}
          // TODO: get from game
          source={require("../../assets/images/icon.png")}
        />
        <View style={styles.activityTextContainer}>
          <Text style={styles.gameName}>{gameName}</Text>
          <View style={GlobalStyles.styles.textWrapContainer}>
            <Text style={GlobalStyles.styles.textWrap}>
              {formatFriendsActivity(friends)}
            </Text>
          </View>
        </View>
        <Entypo name="chevron-small-right" size={26} />
      </View>
    </TouchableOpacity>
  );
};

export default FriendActivity;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  gameImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: GlobalStyles.consts.borderRadius,
  },
  gameName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activityTextContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
  },
});
