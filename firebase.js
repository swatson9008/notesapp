import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrVHAODP48_Szb3ad0oEipOHWQZTBgkvo",
  authDomain: "react-notes-a9406.firebaseapp.com",
  projectId: "react-notes-a9406",
  storageBucket: "react-notes-a9406.appspot.com",
  messagingSenderId: "399784833533",
  appId: "1:399784833533:web:75badc612e9b5a98cf6994"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")