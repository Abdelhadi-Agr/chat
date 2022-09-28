import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { FacebookAuthProvider } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import { getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCu-qSGJtEQu7YeB-4SJYU5gOaxJb_NReU",
    authDomain: "red-hat-bb2f2.firebaseapp.com",
    projectId: "red-hat-bb2f2",
    storageBucket: "red-hat-bb2f2.appspot.com",
    messagingSenderId: "427594671204",
    appId: "1:427594671204:web:3649c4b13b11713e08ab71"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

