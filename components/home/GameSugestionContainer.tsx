import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Text, View } from "../Themed";
import GameSuggestion from "./GameSuggestion";

const DUMMY_GAMES = [
  {
    id: "1",
    name: "yes",
  },
  {
    id: "2",
    name: "random",
  },
  {
    id: "3",
    name: "game",
  },
  {
    id: "4",
    name: "awesome a very long game name yes cool beans",
  },
  {
    id: "5",
    name: "cool",
  },
];

const GameSuggestionContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} horizontal>
        {DUMMY_GAMES.map((game) => (
          <GameSuggestion
            key={game.id}
            gameId={game.id}
            gameTitle={game.name}
          />
        ))}
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
