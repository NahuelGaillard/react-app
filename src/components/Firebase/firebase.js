// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 


const firebaseConfig = {

  apiKey: "AIzaSyABIgIgWDx3uSVYi6B5s1tla_N9hUbfr0E",

  authDomain: "curso-react-42504.firebaseapp.com",

  projectId: "curso-react-42504",

  storageBucket: "curso-react-42504.appspot.com",

  messagingSenderId: "331157969459",

  appId: "1:331157969459:web:319e6d71bddbef15fde146"

};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
