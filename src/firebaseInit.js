// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGD6BE7e1wz6_hPC2-EQ2JPlfnaVkBeW8",
  authDomain: "react-ex10-a6b37.firebaseapp.com",
  projectId: "react-ex10-a6b37",
  storageBucket: "react-ex10-a6b37.appspot.com",
  messagingSenderId: "13567389876",
  appId: "1:13567389876:web:83a72bb81670f9063127e1",
  measurementId: "G-Q30MEKFVYQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);