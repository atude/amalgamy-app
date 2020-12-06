import * as React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
// import { DUMMY_GAMES } from "../../data/_dummyData";
import { Button, Text, View } from "../Themed";
import GameSuggestion from "./GameSuggestion";
import { rec } from "../../data/gameIds";
import axios from "axios";
import { hasKey } from "../../utils/index";
import { useNavigation } from "@react-navigation/native";

// import { ExtractedGameData } from "../../screens/GamesHome";

const GameSuggestionContainer = () => {
  const navigation = useNavigation();
  const [games, setGames] = useState([]);
  async function getGameDetails(appId: number) {
    const response = await axios.get(
      `http://store.steampowered.com/api/appdetails?appids=${appId}&cc=au&l=en`,
    );
    setGames((prevState) => [
      ...prevState,
      extractGameRequestData(response.data),
    ]);
    //   console.log(response);
  }

  const extractGameRequestData = (resultData) => {
    const id = Object.keys(resultData)[0];
    if (hasKey(resultData, id.toString())) {
      const data = resultData[id.toString()].data;
      if (typeof data === "undefined") {
        return { name: "failed" };
      }

      return {
        name: data.name,
        platforms: data.platforms,
        header_image: data["header_image"],
        genres: data.genres || [],
        steam_appid: data.steam_appid,
        description: data.about_the_game,
        publishers: data.developers,
        media: data.screenshots,
        rating: data.metacritic,
      };
    }
    return { name: "failed" };
  };
  React.useEffect(() => {
    async function getGameSuggestion() {
      await rec.map((game) => getGameDetails(game.appid));
    }
    getGameSuggestion();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} horizontal>
        {games.map((gameInfo) => {
          return (
            <GameSuggestion
              key={gameInfo.steam_appid}
              gameId={gameInfo.steam_appid}
              gameTitle={gameInfo.name}
              gameImage={gameInfo.header_image}
              genres={gameInfo.genres}
              description={gameInfo.description}
              publishers={gameInfo.publishers}
              platforms={gameInfo.platforms}
              media={gameInfo.media}
              rating={gameInfo.rating}
            />
          );
        })}
      </ScrollView>
      <View style={styles.viewAllContainer}>
        <Button text="See all ›" />
      </View>
    </View>
  );
};

export default GameSuggestionContainer;

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {
    overflow: "visible",
    marginBottom: 10,
  },
  viewAllContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
