// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9oxRbamQU2662R2ArRkDPOF4K-BJ4hd4",
  authDomain: "isai-16814.firebaseapp.com",
  projectId: "isai-16814",
  storageBucket: "isai-16814.appspot.com", // Fixed storageBucket URL
  messagingSenderId: "768305783676",
  appId: "1:768305783676:web:5287d2eb908443061e3af9",
  measurementId: "G-T24K950Y1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication and Firestore
export const __AUTH = getAuth(app);
export const __DB = getFirestore(app);
export default app;