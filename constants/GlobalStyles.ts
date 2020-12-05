import { StyleSheet } from "react-native";

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
});

export default {
  styles,
  consts,
};
