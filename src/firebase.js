import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJirCgOR8eYkf59Rri3D-68DOvh9szvGY",
    authDomain: "clone-mern-4ac12.firebaseapp.com",
    projectId: "clone-mern-4ac12",
    storageBucket: "clone-mern-4ac12.appspot.com",
    messagingSenderId: "1004814169382",
    appId: "1:1004814169382:web:915e949e684206f9307de7",
    measurementId: "G-6SEBF2P0DG"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

const auth = getAuth()

export { auth, db };

