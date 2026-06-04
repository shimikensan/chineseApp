import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
// You can find this in your Firebase Console -> Project Settings -> General -> Your apps
const firebaseConfig = {
    apiKey: "AIzaSyB3MPKc2Ba_D1mdSZJhScDZx-Oy8NO_eyM",
    authDomain: "chineseapp-9e2b0.firebaseapp.com",
    projectId: "chineseapp-9e2b0",
    storageBucket: "chineseapp-9e2b0.firebasestorage.app",
    messagingSenderId: "248474731388",
    appId: "1:248474731388:web:3e8b22df31965a5eac1af9",
    measurementId: "G-8WXJPN2QJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
