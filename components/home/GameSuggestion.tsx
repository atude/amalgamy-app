import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";
import { Text, View } from "../Themed";

type Props = {
  gameId: string;
  gameTitle: string;
  gameImage?: string;
};

const GameSuggestion = (props: Props) => {
  const { gameId, gameTitle, gameImage } = props;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.image}
          // TODO: get from image source
          source={require("../../assets/images/icon.png")}
        />
        <View style={styles.textWrapContainer}>
          <Text style={styles.caption}>{gameTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameSuggestion;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginRight: 20,
    width: 120,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderRadius: GlobalStyles.consts.borderRadius,
  },
  textWrapContainer: {
    flexDirection: "row",
  },
  caption: {
    textAlign: "center",
    padding: 10,
    alignSelf: "center",
    width: "100%",
  },
});
