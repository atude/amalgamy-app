import * as React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { styles } from "../../constants/GlobalStyles";
import { ColorScheme, Message } from "../../types";
import { Text, View } from "../Themed";

const messageMargin = 80;

type Props = {
  message: Message;
  senderFirstName: string;
  isSender?: boolean;
  consecutive?: boolean;
};

const MessageItem = (props: Props) => {
  const colorScheme = useColorScheme() ?? "light";
  const styles = createStyles(colorScheme);
  const { message, isSender, senderFirstName, consecutive } = props;
  return (
    <>
      {!consecutive && (
        <Text
          style={[
            styles.intermediateName,
            isSender
              ? styles.intermediateNameRight
              : styles.intermediateNameLeft,
          ]}
        >
          {senderFirstName}
        </Text>
      )}
      <View
        style={[
          styles.container,
          isSender ? styles.containerRight : styles.containerLeft,
        ]}
      >
        <Text
          style={[
            styles.message,
            isSender ? styles.messageRight : styles.messageLeft,
          ]}
        >
          {message.message.trim()}
        </Text>
      </View>
    </>
  );
};

const createStyles = (colorScheme: ColorScheme) =>
  StyleSheet.create({
    container: {
      padding: 12,
      borderRadius: 11,
      marginVertical: 4,
    },
    containerLeft: {
      marginRight: messageMargin,
      backgroundColor: Colors[colorScheme].lightgrey3,
    },
    containerRight: {
      marginLeft: messageMargin,
      textAlign: "right",
      backgroundColor: Colors[colorScheme].primary,
    },
    message: {
      fontSize: 14,
    },
    messageLeft: {},
    messageRight: {
      color: Colors[colorScheme].background,
    },
    intermediateName: {
      color: Colors[colorScheme].subheader,
      padding: 4,
    },
    intermediateNameLeft: {},
    intermediateNameRight: {
      alignSelf: "flex-end",
    },
  });

export default MessageItem;
