// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEo0mxF4bDkSlup6N2dFyWN12KdjJUfOg",
  authDomain: "elaboratescene.firebaseapp.com",
  projectId: "elaboratescene",
  storageBucket: "elaboratescene.firebasestorage.app",
  messagingSenderId: "499847249606",
  appId: "1:499847249606:web:7da02d13d55c280a1fa1c7",
  measurementId: "G-BL03KWFJCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);