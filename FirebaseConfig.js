// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase }  from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChqpkCsBFyx_XugxTYP4LEAgpIuJ2RY2M",
  authDomain: "reksti-79ac2.firebaseapp.com",
  databaseURL: "https://reksti-79ac2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reksti-79ac2",
  storageBucket: "reksti-79ac2.appspot.com",
  messagingSenderId: "232145743804",
  appId: "1:232145743804:web:aeb871573f82c61d2245b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
