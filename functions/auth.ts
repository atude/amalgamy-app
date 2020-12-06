import Firebase from "../config";
import { ErrorMessage, User } from "../types";
import { getUser } from "./users";

const usersRef = Firebase.firestore().collection("users");

export const signInEmail = async (
  email: string,
  password: string,
): Promise<User | ErrorMessage> => {
  return await Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(async () => {
      const userDoc = await getUser(email);
      if (userDoc) {
        return userDoc;
      } else {
        return "User document could not be found";
      }
    })
    .catch((error) => {
      const { message } = error;
      console.log(message);
      return message;
    });
};

export const createAccount = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) => {
  return await Firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      // Init user doc
      console.log("Init new user => " + email);
      usersRef.doc(email).set({
        email,
        firstName,
        lastName,
      });
      console.log("Made new user doc => " + email);
    })
    .catch((error) => {
      const { message } = error;
      console.log(message);
      return message;
    });
};

export const signOut = () => {
  Firebase.auth()
    .signOut()
    .then(() => {
      console.log("Signed out");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
