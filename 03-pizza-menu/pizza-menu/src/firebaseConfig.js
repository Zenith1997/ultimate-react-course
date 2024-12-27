// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhlEzSP3NGd5zJujsZLYs6oypcdJMwfMI",
  authDomain: "pizza-menu-1a229.firebaseapp.com",
  projectId: "pizza-menu-1a229",
  storageBucket: "pizza-menu-1a229.firebasestorage.app",
  messagingSenderId: "436961661144",
  appId: "1:436961661144:web:74d842086f86a5008147ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
