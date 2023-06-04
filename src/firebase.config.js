// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFzq-FdwzXrsyrOgoRRwW3edLZq2PZPXo",
  authDomain: "house-marketplace-6fb52.firebaseapp.com",
  projectId: "house-marketplace-6fb52",
  storageBucket: "house-marketplace-6fb52.appspot.com",
  messagingSenderId: "778336513353",
  appId: "1:778336513353:web:882683ef00804481a43e98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();