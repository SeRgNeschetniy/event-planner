// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdpcOY5mPG2GwcYiJTEaY0C8kwhU1wxFs",
  authDomain: "eventplanner-ef473.firebaseapp.com",
  projectId: "eventplanner-ef473",
  storageBucket: "eventplanner-ef473.appspot.com",
  messagingSenderId: "936652121085",
  appId: "1:936652121085:web:f6d5e85b3f6ab5b4982f94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
