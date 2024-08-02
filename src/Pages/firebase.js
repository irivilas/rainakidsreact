// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK4MCZD-PNdOWCnWWlOJ6hGGXNFXCrChg",
  authDomain: "rainakids-8aff0.firebaseapp.com",
  projectId: "rainakids-8aff0",
  storageBucket: "rainakids-8aff0.appspot.com",
  messagingSenderId: "586601953996",
  appId: "1:586601953996:web:00676f3d113b66337c6069",
  measurementId: "G-4FD0FWT8DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);