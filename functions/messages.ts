import Firebase from "../config";
import { Message, User } from "../types";

const messagesRef = Firebase.firestore().collection("messages");

export const getMessages = async (
  receiverEmail: string,
  senderEmail: string,
) => {
  const messagesSent = await messagesRef
    .where("senderEmail", "==", senderEmail)
    .where("receiverEmail", "==", receiverEmail)
    .get();
  const messagesReceived = await messagesRef
    .where("senderEmail", "==", receiverEmail)
    .where("receiverEmail", "==", senderEmail)
    .get();
  const messages: Message[] = [...messagesSent.docs, ...messagesReceived.docs]
    .map((message) => {
      return {
        ...message.data(),
      } as Message;
    })
    .sort((a, b) => a.timestamp - b.timestamp);
  return messages;
};

export const addMessage = async (
  receiverEmail: string,
  senderEmail: string,
  message: string,
): Promise<void> => {
  await messagesRef.add({
    message,
    receiverEmail,
    senderEmail,
    timestamp: new Date().getTime(),
  });
};
