// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCy-3pAzvqtDPfYlURk5RBuhjWNrfz4oSc",
    authDomain: "loginregistration-6576e.firebaseapp.com",
    projectId: "loginregistration-6576e",
    storageBucket: "loginregistration-6576e.appspot.com",
    messagingSenderId: "363647536935",
    appId: "1:363647536935:web:903d4564ed2a3545c26302",
    measurementId: "G-ZYXG8NCTJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};