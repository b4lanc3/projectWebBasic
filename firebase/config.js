// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7CXAmMEXQSVyKbAstZL6vLdwOYS3uD0M",
    authDomain: "travel-3414c.firebaseapp.com",
    projectId: "travel-3414c",
    storageBucket: "travel-3414c.appspot.com",
    messagingSenderId: "719575083949",
    appId: "1:719575083949:web:089e5f787b63944b848f24",
    measurementId: "G-47L2243DL0"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const sum = (a, b) => a + b;
