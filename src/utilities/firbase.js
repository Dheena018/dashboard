// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAMokLjqk-zR6ZubrgbuxUja9HwN0BpeEs",
  authDomain: "loginform-ad4c2.firebaseapp.com",
  projectId: "loginform-ad4c2",
  storageBucket: "loginform-ad4c2.appspot.com",
  messagingSenderId: "317424757992",
  appId: "1:317424757992:web:9207f5d465aac38c492d5d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();