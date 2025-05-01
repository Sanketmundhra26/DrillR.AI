// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCijAXOsFY3otdat7ra9fz3ySzQyz5Ha-Q",
    authDomain: "drillr-ai.firebaseapp.com",
    projectId: "drillr-ai",
    storageBucket: "drillr-ai.firebasestorage.app",
    messagingSenderId: "332934872099",
    appId: "1:332934872099:web:4abc1e1f00b841ac3ec596",
    measurementId: "G-61VQCR9B6H"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);