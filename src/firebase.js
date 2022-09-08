import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASyBXYDKJVWBrShy-MjoSHkrv9OoTgwGA",
  authDomain: "chat-a30d5.firebaseapp.com",
  projectId: "chat-a30d5",
  storageBucket: "chat-a30d5.appspot.com",
  messagingSenderId: "819403258515",
  appId: "1:819403258515:web:a735b6092f71a050e92b66",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
