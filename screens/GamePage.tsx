import * as React from "react";
import { StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Game } from "../types/index";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import HollowButton from "../components/HollowButton";
import { Text, View, ScrollableLayout } from "../components/Themed";
import { dummyGame } from "./GPDummyData";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

interface IGamePageProps {
  gameInfo: Game;
}

export default function GamePage(props: IGamePageProps) {
  const colorScheme = useColorScheme();
  const gameInfo = props.gameInfo;
  return (
    <ScrollableLayout style={styles.scrollContainer}>
      <View
        style={[
          styles.rowContainer,
          { justifyContent: "space-between", marginBottom: 32 },
        ]}
      >
        <View style={styles.rowContainer}>
          <Image
            style={styles.icon}
            source={{
              uri: dummyGame.icon,
            }}
          />
          <View style={[styles.gameDetails]}>
            <Text style={styles.h1}>{dummyGame.name}</Text>
            <Text style={[styles.p, { color: Colors[colorScheme].header }]}>
              {dummyGame.genres.join(" | ")}
            </Text>
            <Text
              style={[
                styles.p,
                { fontStyle: "italic", color: Colors[colorScheme].header },
              ]}
            >
              {dummyGame.publisher}
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={bookmarkGame}>
            <FontAwesome
              name="bookmark-o"
              style={{ color: Colors[colorScheme].primary }}
              size={28}
            >
              {" "}
            </FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity onPress={shareGame}>
            <Ionicons
              name="ios-share"
              style={{ color: Colors[colorScheme].primary, marginTop: 16 }}
              size={32}
            >
              {" "}
            </Ionicons>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.rowContainer, { marginBottom: 32 }]}>
        <Ionicons
          name="md-person"
          style={{ marginRight: 16, color: Colors[colorScheme].header }}
          size={32}
        ></Ionicons>
        <Text style={(styles.p, { color: Colors[colorScheme].header })}>
          {dummyGame.playersAmount.min} - {dummyGame.playersAmount.max} players
        </Text>
      </View>

      <Text
        style={[
          styles.p,
          { color: Colors[colorScheme].header, marginBottom: 32 },
        ]}
      >
        {dummyGame.desc}
      </Text>

      <ScrollView
        horizontal="true"
        contentContainerStyle={[styles.rowContainer, { marginBottom: 32 }]}
      >
        {dummyGame.media.map((link) => (
          <Image
            style={styles.media}
            key={link}
            source={{
              uri: link,
            }}
          />
        ))}
      </ScrollView>

      <Text style={styles.h2}>Platforms</Text>
      <View style={[styles.rowContainer, { marginBottom: 12 }]}>
        <HollowButton icon="ios-laptop" text="PC"></HollowButton>
        <HollowButton icon="ios-laptop" text="PC"></HollowButton>
      </View>

      <Text style={styles.h2}>You May Like</Text>
    </ScrollableLayout>
  );
}

function bookmarkGame() {
  return;
}
function shareGame() {
  return;
}

const styles = StyleSheet.create({
  button: {
    // flex: 0.1,
  },
  scrollContainer: {
    paddingVertical: 64,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  icon: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  media: {
    width: 200,
    height: 130,
    borderRadius: 8,
    marginRight: 24,
  },

  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 4,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 8,
  },
  p: { fontSize: 16, lineHeight: 19 },
  gameDetails: {},
});
