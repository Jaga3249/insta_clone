import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_fIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_fIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_fIREBASE_PROJECTID_ID,
  storageBucket: import.meta.env.VITE_fIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_fIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_fIREBASE_API_ID,
  measurementId: import.meta.env.VITE_fIREBASE_MESUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
