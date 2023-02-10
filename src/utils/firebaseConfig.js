// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_oz-HIPtuSfu9JDRiV38Z216UWmVN6rM",
    authDomain: "cash-flow-a2e41.firebaseapp.com",
    projectId: "cash-flow-a2e41",
    storageBucket: "cash-flow-a2e41.appspot.com",
    messagingSenderId: "299966091834",
    appId: "1:299966091834:web:22fb194ad89694f82cdb03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;