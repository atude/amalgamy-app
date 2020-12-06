import * as React from "react";
import {
  StyleSheet,
  Image,
  Share,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Text, View, ScrollableLayout } from "../../components/Themed";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import { processGenres } from "../../components/games/GameListItem";
import GameSuggestionContainer from "../../components/home/GameSugestionContainer";
import pickAccFeatures from "./AccessibilityFeatures";
let gameName: string;
export default function GamePage({ route, navigation }) {
  const colorScheme = useColorScheme();

  const gameInfo = route.params;
  gameName = gameInfo.name;
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
            accessibilityLabel={`${gameInfo.name}-game-icon`}
            source={{
              uri: gameInfo.icon,
            }}
          />
          <View style={[styles.gameDetails]}>
            <Text style={[styles.h1, styles.constrainHeader]}>
              {gameInfo.name}
            </Text>
            <Text
              style={[
                styles.p,
                styles.constrainHeader,
                { color: Colors[colorScheme].header },
              ]}
            >
              {gameInfo.genres ? processGenres(gameInfo.genres) : ""}
            </Text>
            <Text
              style={[
                styles.p,
                styles.constrainHeader,
                { fontStyle: "italic", color: Colors[colorScheme].header },
              ]}
            >
              {gameInfo.publishers ? gameInfo.publishers[0] : ""}
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

          <TouchableOpacity onPress={shareGame.bind(gameInfo.name)}>
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
          {generatePlayers()}
        </Text>
      </View>

      <Text
        style={[
          styles.p,
          { color: Colors[colorScheme].header, marginBottom: 32 },
        ]}
      >
        {gameInfo.description ? extractDescription(gameInfo.description) : ""}
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={[styles.rowContainer, { marginBottom: 32 }]}
      >
        {gameInfo.media ? (
          processMedia(gameInfo.media).map((link: string, index: number) => (
            <Image
              style={styles.media}
              accessibilityLabel={`${gameInfo.name}-screenshot-${index}`}
              key={link}
              source={{
                uri: link,
              }}
            />
          ))
        ) : (
          <></>
        )}
      </ScrollView>

      <Text style={styles.h2}>Platforms</Text>
      <View style={[styles.rowContainer, { marginBottom: 24 }]}>
        {gameInfo.platforms ? (
          processPlatforms(gameInfo.platforms).map((platform) => {
            return (
              <View
                key={platform}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {platformIcon(platform)}
                <Text style={[{ marginRight: 16 }, styles.p]}>{platform}</Text>
              </View>
            );
          })
        ) : (
          <></>
        )}
      </View>
      <Text style={styles.h2}>Accessbility Features</Text>
      <View style={{ marginBottom: 24 }}>
        {pickAccFeatures().map((feature: string) => {
          return (
            <Text key={feature} style={styles.p}>
              {feature}
            </Text>
          );
        })}
      </View>
      <Text style={[styles.h2, { marginBottom: 12 }]}>You May Like</Text>
      <GameSuggestionContainer></GameSuggestionContainer>
      {/* <View style={{ marginBottom: 20 }}></View> */}
    </ScrollableLayout>
  );
}

function extractDescription(desc: string) {
  // reference: https://stackoverflow.com/questions/822452/strip-html-from-text-javascript
  desc = desc.replace(/<br>/gm, "\n");
  // desc = desc.replace(/<\/h2>/gm, "\n");
  desc = desc.replace(/<h2 class="bb_tag">/gm, "\n");
  desc =
    desc
      .replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "")
      .slice(0, 350)
      .trim() + "...";
  return desc;
}
function processMedia(media) {
  media = media.slice(0, 3);
  const processed = media.map((m) => {
    return m.path_thumbnail;
  });
  return processed;
}
function processPlatforms(platforms: Record<string, unknown>) {
  const buttons = [];
  if (platforms.windows) {
    buttons.push("Windows");
  }
  if (platforms.linux) {
    buttons.push("Linux");
  }
  if (platforms.mac) {
    buttons.push("Mac");
  }
  return buttons;
}
function platformIcon(platform: string) {
  let icon;
  if (platform == "Mac") {
    icon = (
      <FontAwesome
        name="apple"
        style={{ color: Colors.light.primary, marginRight: 8 }}
        size={24}
      ></FontAwesome>
    );
  } else {
    icon = (
      <FontAwesome
        name={platform.toLowerCase()}
        style={{ color: Colors.light.primary, marginRight: 8 }}
        size={24}
      ></FontAwesome>
    );
  }
  return icon;
}
function bookmarkGame() {
  return;
}
const shareGame = async () => {
  try {
    const result = await Share.share({
      message: gameName
        ? `Check out ${gameName} on Amalgamy!`
        : "Come join me on Amalgamy",
      title: "Share Game",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};
function generatePlayers() {
  let min = Math.ceil(1);
  let max = Math.floor(4);
  const minPlayers = Math.floor(Math.random() * (max - min + 1) + min);
  min = Math.ceil(5);
  max = Math.floor(8);
  const maxPlayers = Math.floor(Math.random() * (max - min + 1) + min);

  return `${minPlayers} - ${maxPlayers} players`;
}

const styles = StyleSheet.create({
  button: {},
  scrollContainer: {
    overflow: "visible",
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
    overflow: "visible",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 24,

    marginBottom: 4,
  },
  constrainHeader: {
    maxWidth: 190,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 8,
  },
  p: { fontSize: 16, lineHeight: 25 },
  gameDetails: {},
});
