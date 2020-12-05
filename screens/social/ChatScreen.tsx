import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

const ChatScreen = () => {
  const colorScheme = useColorScheme() ?? "light";
  const styles = createStyles(colorScheme);

  return (
    <ScrollableLayout>
      
    </ScrollableLayout>
  );
};

const createStyles = (colorScheme: ColorScheme) =>
  StyleSheet.create({

  });

export default ChatScreen;
