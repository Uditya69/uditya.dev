// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvk2tvsKvoeM2CSPlE8358-k5zYqnzsfA",
  authDomain: "portfolio-4c9ff.firebaseapp.com",
  projectId: "portfolio-4c9ff",
  storageBucket: "portfolio-4c9ff.appspot.com",
  messagingSenderId: "193755315894",
  appId: "1:193755315894:web:fe3cab0d4118c8a38e7017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const storage=getStorage(app);