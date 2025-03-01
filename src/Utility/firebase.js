import firebase from "firebase/compat/app";
// Firebase Auth
import { getAuth } from "firebase/auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";

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
const app = firebase.initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const auth = getAuth(app);
export const db = app.firestore();
