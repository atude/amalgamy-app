import { Entypo } from "@expo/vector-icons";
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import { Text, View } from "../Themed";
// import { Genre } from "../../types/index";
import layout from "../../constants/ScreenLayout";

type Props = {
  gameId: string;
  gameName: string;
  gameImage: string;
  genres: Genre[];
};

type Genre = {
  description: string;
  id: string;
};

function processGenres(genres: Genre[]): string {
  let string = "";
  genres.forEach((genre) => {
    string += `${genre.description}, `;
  });
  return string.slice(0, -2);
}
const GameListItem = (props: Props) => {
  const { gameId, gameName, gameImage, genres } = props;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.gameImage}
          source={{
            uri: gameImage,
          }}
        />
        <View style={styles.activityTextContainer}>
          <Text style={styles.gameName}>{gameName}</Text>
          <View style={GlobalStyles.styles.textWrapContainer}>
            <Text style={GlobalStyles.styles.textWrap}>
              {processGenres(genres)}
            </Text>
          </View>
        </View>
        <Entypo name="chevron-small-right" size={26} />
      </View>
    </TouchableOpacity>
  );
};

export default GameListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    width: layout.window.width,
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
