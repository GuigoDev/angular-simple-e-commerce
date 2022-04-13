// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLk2Y-D_pH6tezMwm3EymFB65CTVtNavg",
  authDomain: "angular-simple-e-commerc-5c1b4.firebaseapp.com",
  projectId: "angular-simple-e-commerc-5c1b4",
  storageBucket: "angular-simple-e-commerc-5c1b4.appspot.com",
  messagingSenderId: "612652302964",
  appId: "1:612652302964:web:e4735a29896d7155180721",
  measurementId: "G-MSN43N08TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);