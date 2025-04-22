// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBulhIMYW63Yh5qlsrLvK3y8RKLU3wFcIk",
  authDomain: "ems-2-bef3b.firebaseapp.com",
  projectId: "ems-2-bef3b",
  storageBucket: "ems-2-bef3b.firebasestorage.app",
  messagingSenderId: "119193698052",
  appId: "1:119193698052:web:96724ae0c41de22d615a51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  const db = getFirestore(app)
  const auth = getAuth(app)

  export {auth , db}
 
 