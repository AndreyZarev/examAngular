// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-SERVICE.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-SERVICE.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlxm1Rs_NE4i3hNyyxOajPDCQX5i5hOzA",
  authDomain: "armwrestling-offers.firebaseapp.com",
  projectId: "armwrestling-offers",
  storageBucket: "armwrestling-offers.appspot.com",
  messagingSenderId: "653936039348",
  appId: "1:653936039348:web:e9cad56972a86e0fde0ee1",
  measurementId: "G-S96E2QBRX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);