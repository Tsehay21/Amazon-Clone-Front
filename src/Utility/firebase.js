// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Firebase Auth
import { getAuth } from "firebase/auth";
// Firestore
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7PgIwnCKuLV4eW7KyOI_MpPHmieXSCHg",
  authDomain: "clone-2c6a8.firebaseapp.com",
  projectId: "clone-2c6a8",
  storageBucket: "clone-2c6a8.firebasestorage.app",
  messagingSenderId: "87935796661",
  appId: "1:87935796661:web:0fee0488b9cde32df845fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const auth = getAuth(app)
export const db = getFirestore(app);
