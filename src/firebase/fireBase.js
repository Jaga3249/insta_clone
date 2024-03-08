import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfY45Cc9h2_CR8s5ZT43sLdY6YhJ6sqJM",
  authDomain: "insta-clone-2abe8.firebaseapp.com",
  projectId: "insta-clone-2abe8",
  storageBucket: "insta-clone-2abe8.appspot.com",
  messagingSenderId: "801283344999",
  appId: "1:801283344999:web:b625a212714f6ba49622c2",
  measurementId: "G-G0HBC4FV2X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
