// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "smiles-for-speech-2025.firebaseapp.com",
  projectId: "smiles-for-speech-2025",
  storageBucket: "smiles-for-speech-2025.firebasestorage.app",
  messagingSenderId: "998951737438",
  appId: "1:998951737438:web:d701da151995fcd8fa7ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };