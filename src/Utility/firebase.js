
import { initializeApp } from "firebase/app";
// for authentication
import { getAuth } from "firebase/auth";
import{ getFirestore  } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF_8gj1JbhNho6TUan15ofjwAtmwM6wDA",
  authDomain: "clone-acedc.firebaseapp.com",
  projectId: "clone-acedc",
  storageBucket: "clone-acedc.firebasestorage.app",
  messagingSenderId: "57259893524",
  appId: "1:57259893524:web:d3e96c65f4818a40829801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);