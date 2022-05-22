// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJE6A0PQNlRrr0BS8OJb-m3iKfhEkR714",
  authDomain: "aorus-world.firebaseapp.com",
  projectId: "aorus-world",
  storageBucket: "aorus-world.appspot.com",
  messagingSenderId: "431426403506",
  appId: "1:431426403506:web:c9b1db11f6341d8d6c9dab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;