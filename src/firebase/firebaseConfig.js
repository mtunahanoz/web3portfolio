// src/firebase/firebaseConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNhs73EjMVu1MX4_Psd4sTQTfhpnPgv8c",
  authDomain: "portfolio3-d7b76.firebaseapp.com",
  projectId: "portfolio3-d7b76",
  storageBucket: "portfolio3-d7b76.appspot.com",
  messagingSenderId: "302551763550",
  appId: "1:302551763550:web:d91972dfc0790acbec42cf",
  measurementId: "G-F36LRRQS51"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
