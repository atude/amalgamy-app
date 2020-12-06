import { StyleSheet } from "react-native";
import Colors from "./Colors";

const consts = {
  borderRadius: 11,
  headerFontSize: 26,
};

export const styles = StyleSheet.create({
  textHeader: {
    fontSize: consts.headerFontSize,
    fontWeight: "bold",
  },
  textWrapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textWrap: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.light.primary,
    borderRadius: 11,
    margin: 10,
    padding: 10,
  },
  paragraphText: {
    fontSize: 18,
  }
});

export default {
  styles,
  consts,
};
