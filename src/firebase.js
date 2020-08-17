import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5AiO0WQwtwf3nSf3lL0vSNw9xSmEQiAM",
  authDomain: "tinder-a035a.firebaseapp.com",
  databaseURL: "https://tinder-a035a.firebaseio.com",
  projectId: "tinder-a035a",
  storageBucket: "tinder-a035a.appspot.com",
  messagingSenderId: "825554533187",
  appId: "1:825554533187:web:36109ecad4a411da830df6",
  measurementId: "G-QD19LKXH2Q",
});

const db = firebaseApp.firestore();

export default db;
