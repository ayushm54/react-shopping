import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-OCivg8lDEVodU0a9pVKV6cBWQ40ojKM",
  authDomain: "react-shopping-be.firebaseapp.com",
  databaseURL: "https://react-shopping-be.firebaseio.com",
  projectId: "react-shopping-be",
  storageBucket: "react-shopping-be.appspot.com",
  messagingSenderId: "200340013094",
  appId: "1:200340013094:web:5c61f86b295b5dd9aa26e7",
  measurementId: "G-TE62NNYNL9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
