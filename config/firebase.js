// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD22E5l_h1UAJMzGUt84dmNsqcChHgUVvQ",
  authDomain: "projetomobile-920ea.firebaseapp.com",
  projectId: "projetomobile-920ea",
  storageBucket: "projetomobile-920ea.appspot.com",
  messagingSenderId: "424845758439",
  appId: "1:424845758439:web:58c1a3070fcc5d63d9f742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { app, auth, db };