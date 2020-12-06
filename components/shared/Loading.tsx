import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type Props = {
  loading?: boolean;
  noFlex?: boolean;
};

const Loading = (props: Props) => (
  <View style={props.noFlex ? styles.containerNoFlex : styles.container}>
    <ActivityIndicator
      size="large"
      style={!props.loading ? styles.invis : styles.normal}
    />
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  containerNoFlex: {
    justifyContent: "center",
  },
  normal: {},
  invis: {
    display: "none",
  },
});
