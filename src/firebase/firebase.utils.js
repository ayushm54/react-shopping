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

export const createUserProfileDocument = async (
  authenticatedUser,
  additionalData
) => {
  if (!authenticatedUser) {
    return;
  }
  const userRef = firestore.doc(`users/${authenticatedUser.uid}`);
  const snapshot = await userRef.get();

  // storing user data if it dosent exists in our firestore
  if (!snapshot.exists) {
    const { displayName, email } = authenticatedUser;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("Error creating user", e.message);
    }
  }
  // returning the userref to the document we just saved on the firestore
  // this can be used to do further operations on the userdoc in other flows
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
