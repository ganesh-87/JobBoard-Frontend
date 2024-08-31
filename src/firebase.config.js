// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi3r96uf9kTDjenvs1on1ZRpSYZZS3j70",
  authDomain: "jobboardonline-6a293.firebaseapp.com",
  projectId: "jobboardonline-6a293",
  storageBucket: "jobboardonline-6a293.appspot.com",
  messagingSenderId: "1007792150902",
  appId: "1:1007792150902:web:e1194930fa9592fe6b4257",
  measurementId: "G-R9XY1J8J7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
