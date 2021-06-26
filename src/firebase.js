import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOxR5Y7Vu34DKqMCg21wzoOxSf4lpfAHU",
  authDomain: "clone-fa779.firebaseapp.com",
  projectId: "clone-fa779",
  storageBucket: "clone-fa779.appspot.com",
  messagingSenderId: "412369019561",
  appId: "1:412369019561:web:e10fca5e1ea3347f2c7fb8",
  measurementId: "G-3GRMN98SS7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
