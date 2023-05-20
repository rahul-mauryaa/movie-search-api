// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBosSt6XCNxpKF3lU98hlcbaM8vCNTmjrw",
  authDomain: "movie-api2023.firebaseapp.com",
  projectId: "movie-api2023",
  storageBucket: "movie-api2023.appspot.com",
  messagingSenderId: "901479915031",
  appId: "1:901479915031:web:eeb236c1897a7af650c652",
  measurementId: "G-64SM61MJ32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);