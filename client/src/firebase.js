// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e43e9.firebaseapp.com",
  projectId: "mern-auth-e43e9",
  storageBucket: "mern-auth-e43e9.appspot.com",
  messagingSenderId: "1019281614256",
  appId: "1:1019281614256:web:bff60d47d9325168c62275",
  measurementId: "G-220Z5D54FL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);