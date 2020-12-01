import * as React from "react";
import { StyleSheet } from "react-native";

import HollowButton from "../components/HollowButton";
import { Text, View, ScrollableLayout } from "../components/Themed";
import {} from "../components/Themed";

const dummyGame = {
  name: "Among Us",
  desc:
    "Prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!",
  icon:
    "https://static.wikia.nocookie.net/among-us-wiki/images/8/89/Hide_n_seek_icon.png/revision/latest?cb=20200928163901",
  media: [
    "https://sm.ign.com/t/ign_ap/screenshot/default/sc5kzr-1600944611079_pgq3.1080.jpg",
    "https://sm.ign.com/t/ign_ap/gallery/a/among-us-s/among-us-screenshots_c34s.1080.jpg",
  ],
  url: {
    pc: "https://store.steampowered.com/app/945360/Among_Us/",
    ios: "https://apps.apple.com/us/app/among-us/id1351168404",
    android:
      "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia&hl=en_AU&gl=US",
  },
  publisher: "Innersloth LLC",
  playersAmount: {
    min: 4,
    max: 10,
  },
  devices: ["Windows Computer", "Mac Computer", "Linux Computer"],
  genres: ["Action", "Party"],
  accessbilityFeatures: ["Colourblind Support", "High Contrast Colour Scheme"],
  rating: 78,
};
export default function GamePage() {
  return (
    <ScrollableLayout style={styles.scrollContainer}>
      <Text> dwadklawml</Text>
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
});
