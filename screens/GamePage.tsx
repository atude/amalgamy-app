import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { Game } from "../types/index";
import { Ionicons } from "@expo/vector-icons";
import HollowButton from "../components/HollowButton";
import { Text, View, ScrollableLayout } from "../components/Themed";
import { dummyGame } from "./GPDummyData";

interface IGamePageProps {
  gameInfo: Game;
}

export default function GamePage(props: IGamePageProps) {
  return (
    <ScrollableLayout style={styles.scrollContainer}>
      <Image
        style={styles.icon}
        source={{
          uri: dummyGame.icon,
        }}
      />
      <Text>{dummyGame.name}</Text>

      <Text>{dummyGame.genres.join(" | ")}</Text>
      <Text>{dummyGame.publisher}</Text>
      <Ionicons name="md-bookmark" style={styles.topButton} size={32}>
        {" "}
      </Ionicons>
      <Ionicons name="ios-share" style={styles.topButton} size={32}>
        {" "}
      </Ionicons>

      <Text>
        {dummyGame.playersAmount.min} - {dummyGame.playersAmount.max} players
      </Text>
      <Text>{dummyGame.desc}</Text>
      {dummyGame.media.map((link) => (
        <Image
          style={styles.media}
          key={link}
          source={{
            uri: link,
          }}
        />
      ))}
      <Text>Platforms</Text>
      <Text>You May Like</Text>

      {/* <Text>Reviews</Text> */}

      {/* <View style={styles.button}> */}
      {/* <HollowButton
                    onPress={() => {
                        return;
                    }}
                    text="See all"
                ></HollowButton> */}
      {/* </View> */}
    </ScrollableLayout>
  );
}

const styles = StyleSheet.create({
  button: {
    // flex: 0.1,
  },
  scrollContainer: {
    paddingVertical: 64,
    paddingHorizontal: 24,
    // backgroundColor: "red",
    // height: 100%,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  // separator: {
  //     marginVertical: 30,
  //     height: 1,
  //     width: "80%",
  // },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  media: {
    width: 200,
    height: 130,
    borderRadius: 8,
  },
  topButton: {
    color: "purple",
  },
});
