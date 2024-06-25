// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf9cy852YitMe9zKsV6qQXG7mkOPRKezk",
  authDomain: "contatos-753aa.firebaseapp.com",
  projectId: "contatos-753aa",
  storageBucket: "contatos-753aa.appspot.com",
  messagingSenderId: "973913051399",
  appId: "1:973913051399:web:cecc56f4abf7795807f5a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
