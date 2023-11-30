import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAK1mtMgBt0Cqi6s3F2-mGvl9DjpN8Zaw8",
  authDomain: "chat-app-846c5.firebaseapp.com",
  projectId: "chat-app-846c5",
  storageBucket: "chat-app-846c5.appspot.com",
  messagingSenderId: "558553190424",
  appId: "1:558553190424:web:49752c5f1ab680515a736d",
  measurementId: "G-Z8YCKPWXN5",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
