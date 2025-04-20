// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCJZGM-yBoKc8CnZaAyS8Y6sNH_AqZrE4",
  authDomain: "ems-system-df7f0.firebaseapp.com",
  projectId: "ems-system-df7f0",
  storageBucket: "ems-system-df7f0.firebasestorage.app",
  messagingSenderId: "739974760472",
  appId: "1:739974760472:web:4668d234b29ffd577a1b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const db = getFirestore(app)
  const auth = getAuth(app)
  const storage = getStorage(app)
  export {auth,storage}
 
 export default db