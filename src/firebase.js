import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBkCbtKZmxikbV8WiFWmUTIHT0xEbHD6W0",
  authDomain: "rainakidss-e0b0e.firebaseapp.com",
  projectId: "rainakidss-e0b0e",
  storageBucket: "rainakidss-e0b0e.appspot.com",
  messagingSenderId: "765354381522",
  appId: "1:765354381522:web:fa1bc0ec96815e05d51d0b"
};

const app = initializeApp(firebaseConfig);

import {getDocs, getFirestore} from "firebase/firestore"


export const db = getFirestore(app); 

getDocs (db, Juguete)
getDocs (db, Juguete2)
