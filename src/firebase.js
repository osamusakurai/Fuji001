// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm-2jPQ5DwJvcSa9yqbRMwHNMXYg5svjQ",
  authDomain: "fujitenken001.firebaseapp.com",
  projectId: "fujitenken001",
  storageBucket: "fujitenken001.firebasestorage.app",
  messagingSenderId: "361785268635",
  appId: "1:361785268635:web:7c859a1fcedff6f645293e",
  measurementId: "G-YEEWYG7H3N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
