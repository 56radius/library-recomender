// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAnb44bJ7L3OdCEoXW7zTAKuse-lm5DQ1Q",
  authDomain: "library-recomender.firebaseapp.com",
  projectId: "library-recomender",
  storageBucket: "library-recomender.appspot.com",
  messagingSenderId: "648818372189",
  appId: "1:648818372189:web:11382755279183d33267b4",
  measurementId: "G-8KTRPZXHQB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authConfig = getAuth(app);
export default app;
