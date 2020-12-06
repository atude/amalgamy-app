import firebase from "firebase";
import Firebase from "../config";
import { User } from "../types";

const usersRef = Firebase.firestore().collection("users");

export const getUser = async (email: string): Promise<User | undefined> => {
  const res = await usersRef.doc(email).get();
  console.log(res.data());
  const user = res.data();
  return user as User;
};

export const getUsers = async (): Promise<User[]> => {
  const res = await usersRef.get();
  const docs: User[] = res.docs.map((doc) => doc.data() as User);
  return docs;
};

export const addFriend = async (
  userEmail: string,
  friendEmail: string,
): Promise<void> => {
  await usersRef.doc(userEmail).update({
    friendEmails: firebase.firestore.FieldValue.arrayUnion(friendEmail),
  });
};
