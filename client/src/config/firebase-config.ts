// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEqeuT15CAwpU-nWt4xpFnn8PRUkA5Acc",
  authDomain: "blog-web-874a2.firebaseapp.com",
  projectId: "blog-web-874a2",
  storageBucket: "blog-web-874a2.appspot.com",
  messagingSenderId: "46313033383",
  appId: "1:46313033383:web:8cad1ac4310d4e0c341582",
  measurementId: "G-VJ503ETB9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();