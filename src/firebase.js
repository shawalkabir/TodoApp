import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWqICF7eymfTK46rcUQCbte3nXjosJBEY",
  authDomain: "todo-clone-35816.firebaseapp.com",
  databaseURL: "https://todo-clone-35816.firebaseio.com",
  projectId: "todo-clone-35816",
  storageBucket: "todo-clone-35816.appspot.com",
  messagingSenderId: "163857830266",
  appId: "1:163857830266:web:197c0231939845fdf3c6c3",
  measurementId: "G-TGH8FXRBVS",
});

const db = firebaseApp.firestore();

export default db;
