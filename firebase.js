import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBjO3JWca-wlrsFM5Lvj16cqIUXmBXt0QU",
  authDomain: "wppp-96ba2.firebaseapp.com",
  projectId: "wppp-96ba2",
  storageBucket: "wppp-96ba2.appspot.com",
  messagingSenderId: "291000997399",
  appId: "1:291000997399:web:8cf2a2fcc81e61e7dcee52",
  measurementId: "G-M7T7P26WDS"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {experimentalForceLongPolling: true,});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
