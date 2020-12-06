import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import FullIcon from "../../components/shared/FullIcon";
import Loading from "../../components/shared/Loading";
import MessageItem from "../../components/social/MessageItem";
import { Layout, ScrollableLayout, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { AppContext } from "../../context";
import { addMessage, getMessages } from "../../functions/messages";
import { ColorScheme, Message } from "../../types";

const ChatScreen = () => {
  const colorScheme = useColorScheme() ?? "light";
  const styles = createStyles(colorScheme);
  const { currChatReceiver, user } = useContext(AppContext);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollViewRef = useRef<any>(null);

  const handleAddMessage = async () => {
    setLoading(true);
    if (currChatReceiver && user && message && message.length) {
      await addMessage(currChatReceiver.email, user.email, message?.trim());
      await fetchMessages();
      setMessage("");
    }
    setLoading(false);
  };

  const fetchMessages = async () => {
    setLoading(true);
    if (currChatReceiver && user) {
      const thisMessages = await getMessages(
        currChatReceiver?.email,
        user?.email,
      );
      setMessages(thisMessages);
    }
    setLoading(false);
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <View style={styles.container}>
      {!!loading && !messages.length && <Loading loading={true} />}
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollable}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <>
          {messages.map((message, i) => {
            if (user && currChatReceiver) {
              if (message.senderEmail === user?.email) {
                return (
                  <MessageItem
                    key={message.id}
                    isSender
                    senderFirstName="You"
                    message={message}
                    consecutive={
                      message.senderEmail === messages[i - 1]?.senderEmail
                    }
                  />
                );
              }
              return (
                <MessageItem
                  key={message.id}
                  message={message}
                  senderFirstName={currChatReceiver?.firstName}
                  consecutive={
                    message.receiverEmail === messages[i - 1]?.receiverEmail
                  }
                />
              );
            }
          })}
          {!messages.length && !loading && (
            <FullIcon
              name="message"
              text="You haven't started to chat yet. Send your first message!"
            />
          )}
        </>
      </ScrollView>
      <View style={styles.messageInputContainer}>
        <TextInput
          multiline
          maxLength={512}
          placeholder="Type here..."
          style={styles.messageInput}
          onChangeText={(txt) => setMessage(txt)}
          value={message}
          editable={!loading}
        />
        <TouchableOpacity
          onPress={handleAddMessage}
          disabled={!message || !message.trim().length}
        >
          <MaterialIcons
            name="send"
            color={
              !message || !message.trim().length || loading
                ? Colors[colorScheme].grey2
                : Colors[colorScheme].primary
            }
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
    loader: {},
  });

export default ChatScreen;
