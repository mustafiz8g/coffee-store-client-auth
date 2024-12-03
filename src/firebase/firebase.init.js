

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfGEiZUHYUMq0CWwaiXV46R201Iy8wuCw",
  authDomain: "coffee-store-83ce9.firebaseapp.com",
  projectId: "coffee-store-83ce9",
  storageBucket: "coffee-store-83ce9.firebasestorage.app",
  messagingSenderId: "631155621551",
  appId: "1:631155621551:web:54950c4527e4e51272de5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

