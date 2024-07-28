// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAYqCAQtXuP_qVqaH4T7w6wcFUNQYB5b0I",
  authDomain: "myecom-cde42.firebaseapp.com",
  projectId: "myecom-cde42",
  storageBucket: "myecom-cde42.appspot.com",
  messagingSenderId: "125208567737",
  appId: "1:125208567737:web:c966edb241daa3d6256068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }