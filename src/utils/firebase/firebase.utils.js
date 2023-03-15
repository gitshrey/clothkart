import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCSRlryapq2uEZCza1LrHucQE2oQbSyqlU",

  authDomain: "clothkart-db-a8cc9.firebaseapp.com",

  projectId: "clothkart-db-a8cc9",

  storageBucket: "clothkart-db-a8cc9.appspot.com",

  messagingSenderId: "65005247723",

  appId: "1:65005247723:web:ba21c46033cebb4acd72ae",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentsFromAuth = async (userAuth) => {
  const userDocref = doc(db, "users", userAuth.uid);
  console.log(userDocref);

  const userSnapshot = await getDoc(userDocref);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
