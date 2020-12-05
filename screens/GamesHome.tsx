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
import RBSheet from "react-native-raw-bottom-sheet";
import { AppContext } from "../context/index";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


type ExtractedGameData = {
  name: string;
  platforms: Record<string, unknown>;
  header_image: string;
  genres: Record<string, unknown>[];
  steam_appid: number;
};

type GamesHomeProps = {
  navigation: any;
};

type GamesHomeState = {
  allGames: Record<string, unknown>[];
  recommendedGames: Record<string, unknown>[];
  featuredGames: Record<string, unknown>[];
  topSellingGames: Record<string, unknown>[];
  selectedIndex: number;
  modalVisible: boolean;
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
      modalVisible: true,
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
          onPress={() => this.props.navigation.navigate("Profile")}
          key={index}
          gameId={game.id}
          gameName={game.name}
          gameImage={game.small_capsule_image}
          genres={game.genres}
        />
      );
    });
  };
  topSellingGamesList = () => {
    if (!this.state.topSellingGames) return;
    return this.state.topSellingGames.map((game: any, index) => {
      return (
        <GameListItem
          onPress={() => this.props.navigation.navigate("Profile")}
          key={index}
          gameId={game.id}
          gameName={`${index + 1}. ${game.name}`}
          gameImage={game.small_capsule_image}
          genres={game.genres}
        />
      );
    });
  };
  recommendedGamesList = () => {
    return this.state.allGames.map((game: any, index) => {
      // let [appId, res] = game;
      // let data = res[appId].data;
      if (game.name === "failed") {
        return <Text key={index}>{game.name}</Text>;
      }
      return (
        <GameListItem
          onPress={() => this.props.navigation.navigate("Profile")}
          key={index}
          gameId={game.steam_appid}
          gameName={game.name}
          gameImage={game.header_image}
          genres={game.genres}
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

      return {
        name: data.name,
        platforms: data.platforms,
        header_image: data["header_image"],
        genres: data.genres || [],
        steam_appid: data.steam_appid,
      };
    }
    return { name: "failed" };
  };
  componentDidMount() {
    this.getFeaturedGames();
    this.getAllGames();
  }
  render() {
    const buttons = ["Recommended", "Top Selling", "Featured"];
    const { selectedIndex } = this.state;
    return (
      <View>
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              paddingLeft: 20,
              paddingRight: 20,
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <FiltersBottomSheet />
        </RBSheet>
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
          <FiltersIcon onPress={() => this.RBSheet.open()}></FiltersIcon>
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
