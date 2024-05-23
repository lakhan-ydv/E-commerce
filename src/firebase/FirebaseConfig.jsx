// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRVCoLZfyOsQ12mCp3rleyFIe0ixw2LWk",
  authDomain: "myfirstapp-20a45.firebaseapp.com",
  projectId: "myfirstapp-20a45",
  storageBucket: "myfirstapp-20a45.appspot.com",
  messagingSenderId: "356870770579",
  appId: "1:356870770579:web:3a1efd032c0a9bf7132266"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth =getAuth(app);

export {fireDB,auth}