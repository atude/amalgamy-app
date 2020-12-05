import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import MessageItem from "../../components/social/MessageItem";
import { Layout, ScrollableLayout, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { DUMMY_MESSAGES } from "../../data/_dummyData";
import { ColorScheme, Message } from "../../types";

const ChatScreen = () => {
  const colorScheme = useColorScheme() ?? "light";
  const styles = createStyles(colorScheme);
  const [messages, setMessages] = useState<Message[]>(DUMMY_MESSAGES);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollable}>
        {messages.map((message) => {
          // TODO: put actual email check here
          if (message.senderEmail === "f@f.com") {
            console.log("yes")
            return <MessageItem key={message.id} isSender message={message} />;
          }
          return <MessageItem key={message.id} message={message} />;
        })}
      </ScrollView>
      <View style={styles.messageInputContainer}>
        <TextInput
          multiline
          maxLength={512}
          placeholder="Type here..."
          style={styles.messageInput}
        />
        <TouchableOpacity>
          <MaterialIcons
            name="send"
            color={Colors[colorScheme].primary}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (colorScheme: ColorScheme) =>
  StyleSheet.create({
    container: {
      height: "100%",
      paddingBottom: 20,
    },
    scrollable: {
      paddingHorizontal: 20,
    },
    messageInputContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      padding: 12,
      marginHorizontal: 20,
      marginTop: 12,
      borderColor: Colors[colorScheme].primary,
      borderRadius: 11,
      borderWidth: 2,
    },
    messageInput: {
      flex: 1,
      marginBottom: 4,
    },
  });

export default ChatScreen;
