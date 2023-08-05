// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMVh2WnaUSlveBJt4JfuH053PDrComkhI",
  authDomain: "sv-audiophile-challenge.firebaseapp.com",
  projectId: "sv-audiophile-challenge",
  storageBucket: "sv-audiophile-challenge.appspot.com",
  messagingSenderId: "183834777747",
  appId: "1:183834777747:web:7aa03192609ea4ad79d566"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)