import * as React from "react";
import { StyleSheet } from "react-native";
import FriendActivityContainer from "../components/home/FriendActivityContainer";
import GameSuggestionContainer from "../components/home/GameSugestionContainer";

import { ScrollableLayout, Text, View } from "../components/Themed";

export default function HomeScreen() {
  return (
    <ScrollableLayout>
      <GameSuggestionContainer />
      <FriendActivityContainer />
    </ScrollableLayout>
  );
}
