// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUTbPS8dly7Yqd9IXQd2Hu4E607Ywde_0",
  authDomain: "netflix-gpt-6babb.firebaseapp.com",
  projectId: "netflix-gpt-6babb",
  storageBucket: "netflix-gpt-6babb.firebasestorage.app",
  messagingSenderId: "406675788316",
  appId: "1:406675788316:web:29d120416a6254aeb185d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
