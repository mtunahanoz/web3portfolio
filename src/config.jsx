import { Connection, PublicKey } from '@solana/web3.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDNhs73EjMVu1MX4_Psd4sTQTfhpnPgv8c',
  authDomain: 'portfolio3-d7b76.firebaseapp.com',
  projectId: 'portfolio3-d7b76',
  storageBucket: 'portfolio3-d7b76.appspot.com',
  messagingSenderId: '302551763550',
  appId: '1:302551763550:web:d91972dfc0790acbec42cf',
  measurementId: 'G-F36LRRQS51',
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const network = 'https://api.devnet.solana.com';
export const programID = new PublicKey('F7R3U35J2FNpFaMZt8pjnBNQ6zHbK1c2TWtVYUhRJsEH'); // Program ID

export const getConnection = () => {
  return new Connection(network, 'confirmed');
};
