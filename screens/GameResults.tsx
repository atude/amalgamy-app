import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import GameListItem from "../components/games/GameListItem";
import layout from "../constants/ScreenLayout";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

export default function HomeScreen({ route }) {
  const navigation = useNavigation();
  const [filteredList, setFilteredList] = useState(route.params.list);
  console.log(filteredList.length);
  return (
    <ScrollView style={styles.container}>
      {filteredList.length === 0 ? (
        <View
          style={{
            paddingVertical: 40,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Your search returned no results 😞</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                marginVertical: 20,
                padding: 20,
                borderRadius: 50,
                width: layout.window.width - 40,
                backgroundColor: Colors.light.primary,
              }}
            >
              <Text
                style={{
                  ...styles.title,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Back to games
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
      {filteredList.map((game: any, index: number) => {
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
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    width: layout.window.width,
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    marginTop: 0,
  },
  title: {
    color: Colors.light.darkgrey,
    fontSize: 20,
    fontWeight: "bold",
  },
});
