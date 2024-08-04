// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCugozz6WMA58kQ8frEghOMZUlj_Gq86F8",
  authDomain: "glassdoor-c70a5.firebaseapp.com",
  projectId: "glassdoor-c70a5",
  storageBucket: "glassdoor-c70a5.appspot.com",
  messagingSenderId: "904964594197",
  appId: "1:904964594197:web:d352ba77ef1c8d51f70c1c"
};

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth };