import * as React from "react";
import { StyleSheet, ScrollView, Modal, Animated } from "react-native";
import axios from "axios";
import { Text, View } from "../components/Themed";
import gameIds from "../data/gameIds";
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
  recommendedGames: Record<string, unknown>[];
  featuredGames: Record<string, unknown>[];
  topSellingGames: Record<string, unknown>[];
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
      recommendedGames: [],
      featuredGames: [],
      topSellingGames: [],
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
  getFeaturedGames = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://store.steampowered.com/api/featuredcategories/`)
        .then(
          (res) => {
            this.setState(
              {
                featuredGames: res.data.specials.items,
                topSellingGames: res.data.top_sellers.items,
              },
              () => {
                console.log(res.data.top_sellers.items);
                resolve(res.data.top_sellers);
              },
            );
          },
          (reason) => {
            console.log(reason);
          },
        )
        .catch((err) => {
          reject(err);
        });
    });
  };
  getAllGames = () => {
    const allGamePromises = gameIds.map((game) => {
      return this.getGameDetails(game.appid);
    });
    Promise.all(allGamePromises);
  };
  featuredGamesList = () => {
    if (!this.state.featuredGames) return;
    return this.state.featuredGames.map((game: any, index) => {
      return (
        <GameListItem
          key={index}
          gameId={game.id}
          gameName={game.name}
          gameImage={game.small_capsule_image}
          genres={game.genres}
          description={game.description}
          publishers={game.developers}
          platforms={game.platforms}
          media={game.screenshots}
          rating={game.metacritic}
        />
      );
    });
  };
  topSellingGamesList = () => {
    if (!this.state.topSellingGames) return;
    return this.state.topSellingGames.map((game: any, index) => {
      return (
        <GameListItem
          key={index}
          gameId={game.id}
          gameName={`${index + 1}. ${game.name}`}
          gameImage={game.small_capsule_image}
          genres={game.genres}
          description={game.description}
          publishers={game.developers}
          platforms={game.platforms}
          media={game.screenshots}
          rating={game.metacritic}
        />
      );
    });
  };
  recommendedGamesList = () => {
    return this.state.allGames.map((game: any, index) => {
      // let [appId, res] = game;
      // let data = res[appId].data;
      // console.log(game);
      if (game.name === "failed") {
        return <Text key={index}>{game.name}</Text>;
      }
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
      // console.log(data.screenshots);
      // console.log(data.developers);
      // console.log(data.metacritic);
      // console.log(data);

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
    this.getFeaturedGames();
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
            ? this.recommendedGamesList()
            : this.state.selectedIndex == 1
            ? this.topSellingGamesList()
            : this.featuredGamesList()}
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
