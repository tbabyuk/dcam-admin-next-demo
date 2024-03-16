import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5XfLU8vVTU-CgAgxQR5lLjrl0CpiDQQQ",
  authDomain: "dcam-admin-demo.firebaseapp.com",
  projectId: "dcam-admin-demo",
  storageBucket: "dcam-admin-demo.appspot.com",
  messagingSenderId: "93789166981",
  appId: "1:93789166981:web:dd95e2828b05bc9dfb38ec",
  measurementId: "G-HGBS97MPT4"
};


const app = initializeApp(firebaseConfig)

export const adminAuth = getAuth(app)
export const adminDB = getFirestore(app)
