import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZyR6sWYlhkIq3aJlGUvp8tswJc3iAa_8",
  authDomain: "miniblog-17d3f.firebaseapp.com",
  projectId: "miniblog-17d3f",
  storageBucket: "miniblog-17d3f.appspot.com",
  messagingSenderId: "587130803872",
  appId: "1:587130803872:web:e51f4e6e4060e464eb1bc5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
