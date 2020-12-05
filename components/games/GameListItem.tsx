import { Entypo } from "@expo/vector-icons";
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import { Text, View } from "../Themed";
import layout from "../../constants/ScreenLayout";

type Props = {
  gameId: string;
  gameName: string;
  gameImage: string;
  genres?: GameGenre[];
  onPress(): void;
};

type GameGenre = {
  description: string;
  id: string;
};

function processGenres(genres: GameGenre[]): string {
  let string = "";
  genres.forEach((genre) => {
    string += `${genre.description}, `;
  });
  return string.slice(0, -2);
}
const GameListItem = (props: Props) => {
  const { gameId, gameName, gameImage, genres } = props;
  return (
    <TouchableOpacity onPress={props.onPress}>
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
              {genres ? processGenres(genres) : <></>}
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
    alignItems: "flex-start",
    padding: 15,
    width: layout.window.width,
  },
  gameImage: {
    width: 55,
    height: 55,
    resizeMode: "cover",
    borderRadius: GlobalStyles.consts.borderRadius,
  },
  gameName: {
    fontSize: 16,
    fontWeight: "500",
  },
  activityTextContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
  },
});
