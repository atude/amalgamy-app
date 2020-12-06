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
import RBSheet from "react-native-raw-bottom-sheet";
import { OperatingSystem, Genre, Language } from "../types/index";
import FilterModalHeader from "../components/games/FilterModalHeader";
import GenreMenu from "../components/games/FilterMenus/GenreMenu";
import LanguageMenu from "../components/games/FilterMenus/LanguageMenu";
import PriceMenu from "../components/games/FilterMenus/PriceMenu";
export type ExtractedGameData = {
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

type GamesHomeProps = {
  navigation: any;
};

type GamesHomeState = {
  allGames: Record<string, unknown>[];
  selectedIndex: number;
  modalVisible: boolean;
  platforms: OperatingSystem[];
  genres: string[];
  languages: Language[];
  priceMin: number;
  priceMax: number;
  menuItem: string;
};

export default class GamesHome extends React.Component<
  GamesHomeProps,
  GamesHomeState
> {
  constructor(props: GamesHomeProps) {
    super(props);
    this.state = {
      allGames: [],
      selectedIndex: 0,
      modalVisible: true,
      platforms: [],
      genres: [],
      languages: ["English"],
      priceMin: -1,
      priceMax: -1,
      menuItem: "filters",
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
            console.log(reason);
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
  addPlatformFilter(platform: OperatingSystem) {
    this.setState(
      ({ platforms }) => ({
        platforms: [...platforms, platform],
      }),
      () => {
        console.log(`added: ${platform}`);
      },
    );
  }
  removePlatformFilter(platform: OperatingSystem) {
    this.setState(({ platforms }) => ({
      platforms: platforms.filter((plat) => {
        return plat != platform;
      }),
    }));
  }
  addGenreFilter(genre: Genre) {
    this.setState(
      ({ genres }) => ({
        genres: [...genres, genre],
      }),
      () => {
        console.log(`added genre: ${genre}`);
      },
    );
  }
  removeGenreFilter(genre: string) {
    this.setState(({ genres }) => ({
      genres: genres.filter((val) => {
        return val != genre;
      }),
    }));
  }
  addLanguageFilter(language: Language) {
    this.setState(
      ({ languages }) => ({
        languages: [...languages, language],
      }),
      () => {
        console.log(`added lang: ${language}`);
      },
    );
  }
  removeLanguageFilter(language: string) {
    this.setState(({ languages }) => ({
      languages: languages.filter((val) => {
        return val != language;
      }),
    }));
  }

  componentDidMount() {
    this.getAllGames();
  }
  setMenu(menu: string) {
    this.setState({
      menuItem: menu,
    });
  }
  setPriceMin(price: number) {
    this.setState(
      {
        priceMin: price,
      },
      () => {
        console.log(`setmin: ${price}`);
      },
    );
  }
  setPriceMax(price: number) {
    this.setState(
      {
        priceMax: price,
      },
      () => {
        console.log(`setmax: ${price}`);
      },
    );
  }
  applyFilters() {
    this.RBSheet.close();
  }
  render() {
    const buttons = ["Recommended", "Top Selling", "Featured"];
    const { selectedIndex } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={700}
          openDuration={250}
          customStyles={{
            container: {
              backgroundColor: Colors.light.primary,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
            draggableIcon: {
              backgroundColor: "#fff",
            },
          }}
        >
          <FilterModalHeader
            setMenu={this.setMenu.bind(this)}
            menu={this.state.menuItem}
          />
          <View
            style={{ backgroundColor: "white", height: layout.window.height }}
          >
            {this.state.menuItem === "genres" ? (
              <GenreMenu
                genreFilters={this.state.genres}
                removeGenre={this.removeGenreFilter.bind(this)}
                addGenre={this.addGenreFilter.bind(this)}
              />
            ) : this.state.menuItem === "languages" ? (
              <LanguageMenu
                languageFilters={this.state.languages}
                removeLanguage={this.removeLanguageFilter.bind(this)}
                addLanguage={this.addLanguageFilter.bind(this)}
              />
            ) : this.state.menuItem === "Price" ? (
              <PriceMenu
                setPriceMin={this.setPriceMin.bind(this)}
                setPriceMax={this.setPriceMax.bind(this)}
                priceMin={this.state.priceMin}
                priceMax={this.state.priceMax}
              />
            ) : (
              <FiltersBottomSheet
                removePlatform={this.removePlatformFilter.bind(this)}
                addPlatform={this.addPlatformFilter.bind(this)}
                genreFilters={this.state.genres}
                removeGenre={this.removeGenreFilter.bind(this)}
                addGenre={this.addGenreFilter.bind(this)}
                platformFilters={this.state.platforms}
                openMenu={this.setMenu.bind(this)}
                languageFilters={this.state.languages}
                removeLanguage={this.removeLanguageFilter.bind(this)}
                addLanguage={this.addLanguageFilter.bind(this)}
                priceMin={this.state.priceMin}
                priceMax={this.state.priceMax}
                applyFilters={this.applyFilters.bind(this)}
              />
            )}
          </View>
        </RBSheet>
        <View style={styles.tabButtonsContainer}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{
              height: 40,
              borderRadius: 100,
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
    flex: 0,
    flexDirection: "row",
    width: layout.window.width,
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    marginTop: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
