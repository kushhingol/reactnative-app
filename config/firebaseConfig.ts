// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCugU5gEdFvaO8PIt3wDC8NCcquYA2GjDw",
  authDomain: "brite-solutions.firebaseapp.com",
  projectId: "brite-solutions",
  storageBucket: "brite-solutions.appspot.com",
  messagingSenderId: "19946859927",
  appId: "1:19946859927:web:27abfd0a1a29f0df61e8d2",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export default app;
