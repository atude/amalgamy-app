import { Feather } from "@expo/vector-icons";
import * as React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
  Text,
} from "react-native";
import Colors from "../../constants/Colors";

type Props = {
  visible: boolean;
  handleDismiss(): void;
};

export default function FiltersIcon(props: Props) {
  return (
    <Modal
      animated
      animationType="fade"
      visible={props.visible}
      transparent
      onRequestClose={() => props.handleDismiss()}
    >
      <View style={styles.overlay}>
        <Text>Hi</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
});
