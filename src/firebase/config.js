import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3TXI3bfjvBG14yipwhjBFd2TJOGxKbco",
    authDomain: "portfolio-5164f.firebaseapp.com",
    projectId: "portfolio-5164f",
    storageBucket: "portfolio-5164f.firebasestorage.app",
    messagingSenderId: "74141038828",
    appId: "1:74141038828:web:54310f4b6602b1cc640dc9",
    measurementId: "G-VRXYVJLV1K"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default analytics;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;