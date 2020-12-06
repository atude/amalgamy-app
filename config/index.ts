import { firebaseConfig } from "./firebase.config";
import firebase from "firebase";
import "@firebase/firestore";

const Firebase = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export default Firebase;
