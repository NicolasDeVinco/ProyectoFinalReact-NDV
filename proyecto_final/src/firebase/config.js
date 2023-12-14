// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSPfwfUySSqNxwRKkiobRyhxQEiECCFU8",
  authDomain: "reactcursondv.firebaseapp.com",
  projectId: "reactcursondv",
  storageBucket: "reactcursondv.appspot.com",
  messagingSenderId: "246811087869",
  appId: "1:246811087869:web:86c7ec4967c7d218b43f94"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const firebaseConnect = () => app