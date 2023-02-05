import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "calender-43.firebaseapp.com",
    projectId: "calender-43",
    storageBucket: "calender-43.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

let analytics;
if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}
const db = getFirestore(app);
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();

const storage = getStorage();

export { analytics, storage, auth, Provider };
export default db;