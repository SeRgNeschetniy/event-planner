// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPxfuAiJ6p67V9j8LzUJQIm6BMI3LLXOE",
  authDomain: "event-planner-5d60c.firebaseapp.com",
  projectId: "event-planner-5d60c",
  storageBucket: "event-planner-5d60c.appspot.com",
  messagingSenderId: "667394386941",
  appId: "1:667394386941:web:5334b4b110958336800794",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
