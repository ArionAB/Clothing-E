import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useRef } from "react";

const config = {
  apiKey: "AIzaSyDG4r-48MIQxDJTtmJQvH5Up5aCtHthI0w",
  authDomain: "crwn-db-bfa9a.firebaseapp.com",
  projectId: "crwn-db-bfa9a",
  storageBucket: "crwn-db-bfa9a.appspot.com",
  messagingSenderId: "103153936396",
  appId: "1:103153936396:web:a762da9b4f696d5e536629",
  measurementId: "G-TDRQDYVY5Z",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
