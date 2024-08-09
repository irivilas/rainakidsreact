
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDK4MCZD-PNdOWCnWWlOJ6hGGXNFXCrChg",
  authDomain: "rainakids-8aff0.firebaseapp.com",
  projectId: "rainakids-8aff0",
  storageBucket: "rainakids-8aff0.appspot.com",
  messagingSenderId: "586601953996",
  appId: "1:586601953996:web:00676f3d113b66337c6069",
  measurementId: "G-4FD0FWT8DE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage };
