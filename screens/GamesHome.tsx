import * as React from "react";
import { StyleSheet, ScrollView, Modal, Animated } from "react-native";
import axios from "axios";
import { Text, View } from "../components/Themed";
import * as gameIds from "../data/gameIds";
import { hasKey } from "../utils/index";
import GameListItem from "../components/games/GameListItem";
import { ButtonGroup } from "react-native-elements";
import layout from "../constants/ScreenLayout";
import Colors from "../constants/Colors";
import FiltersIcon from "../components/games/FiltersIcon";
import FiltersBottomSheet from "../components/games/FiltersBottomSheet";

type ExtractedGameData = {
  name: string;
  platforms: Record<string, unknown>;
  header_image: string;
  genres: Record<string, unknown>[];
  steam_appid: number;
  about_the_game: string;
  description: string;
  developers: Array<string>;
  screenshots: Record<string, unknown>;
  metacritic: Array<string>;
};

type GamesHomeProps = Record<string, unknown>;

type GamesHomeState = {
  allGames: Record<string, unknown>[];
  selectedIndex: number;
};

export default class GamesHome extends React.Component<
  GamesHomeProps,
  GamesHomeState
> {
  constructor(props: GamesHomeProps) {
    super(props);
    this.state = {
      allGames: [],
      selectedIndex: 1,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex: number) {
    this.setState({ selectedIndex });
  }
  getGameDetails = (appId: number) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://store.steampowered.com/api/appdetails?appids=${appId}&cc=au&l=en`,
        )
        .then(
          (res) => {
            if (!this.extractStatus(res.data)) {
              console.log(`failed: ${appId}`);
            } else {
              this.setState(
                {
                  allGames: [
                    ...this.state.allGames,
                    this.extractGameRequestData(res.data),
                  ],
                },
                () => {
                  resolve(res);
                },
              );
            }
          },
          (reason) => {
            console.log(appId, reason);
          },
        )
        .catch((err) => {
          reject(err);
        });
    });
  };

  getAllGames = () => {
    const allGamePromises = gameIds.all.map((game) => {
      return this.getGameDetails(game.appid);
    });
    Promise.all(allGamePromises);
  };
  gamesList = (gameSet, ranked) => {
    const recGamesIds = gameSet.map((game) => {
      return game.appid;
    });
    const allGames = this.state.allGames;
    const recGameDetails = allGames.filter((game) =>
      recGamesIds.includes(game.steam_appid),
    );

    return recGameDetails.map((game: any, index) => {
      if (game.name === "failed") {
        return <Text key={index}>{game.name}</Text>;
      }
      if (ranked) {
        return (
          <GameListItem
            key={index}
            gameId={game.steam_appid}
            gameName={game.name}
            gameImage={game.header_image}
            genres={game.genres}
            ranking={index + 1}
            description={game.description}
            publishers={game.publishers}
            platforms={game.platforms}
            media={game.media}
            rating={game.rating}
          />
        );
      } else {
        return (
          <GameListItem
            key={index}
            gameId={game.steam_appid}
            gameName={game.name}
            gameImage={game.header_image}
            genres={game.genres}
            description={game.description}
            publishers={game.publishers}
            platforms={game.platforms}
            media={game.media}
            rating={game.rating}
          />
        );
      }
    });
  };
  extractStatus = (resultData: { [key: string]: any }) => {
    const id = Object.keys(resultData)[0];
    return resultData[id.toString()].success;
  };
  extractGameRequestData = (resultData: {
    [key: string]: { data: ExtractedGameData };
  }) => {
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
  componentDidMount() {
    this.getAllGames();
  }
  render() {
    const buttons = ["Recommended", "Top Selling", "Featured"];
    const { selectedIndex } = this.state;
    return (
      <View>
        <View style={styles.tabButtonsContainer}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{
              height: 30,
              borderRadius: 15,
              width: layout.window.width - 60,
            }}
            textStyle={{
              color: "black",
            }}
            buttonContainerStyle={{
              backgroundColor: Colors.light.lightgrey2,
            }}
            innerBorderStyle={{
              color: "transparent",
            }}
            selectedButtonStyle={{
              backgroundColor: Colors.light.darkgrey,
              borderRadius: 100,
            }}
          />
          <FiltersIcon></FiltersIcon>
        </View>
        <ScrollView style={styles.container}>
          {this.state.selectedIndex === 0
            ? this.gamesList(gameIds.rec, false)
            : this.state.selectedIndex == 1
            ? this.gamesList(gameIds.top, true)
            : this.gamesList(gameIds.featured, false)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    width: layout.window.width,
    alignItems: "center",
    marginTop: 30,
  },
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
