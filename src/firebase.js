// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnQP9sCOtuFuCKYHP7kiaI8vx3MO4LXho",
  authDomain: "life-pwa-bdf80.firebaseapp.com",
  projectId: "life-pwa-bdf80",
  storageBucket: "life-pwa-bdf80.appspot.com",
  messagingSenderId: "268507315676",
  appId: "1:268507315676:web:920a685509b96dc6732319",
  measurementId: "G-VB3LJR8KNM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db }