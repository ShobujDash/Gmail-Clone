// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbpRZXkir5v-kZ3jW59c8LJIY1_7ZfNnA",
  authDomain: "clone-yt-21eeb.firebaseapp.com",
  projectId: "clone-yt-21eeb",
  storageBucket: "clone-yt-21eeb.appspot.com",
  messagingSenderId: "130361222708",
  appId: "1:130361222708:web:7d7d542cc9f548e1a00c61",
  measurementId: "G-B0KP1SEJ5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFireGtore()