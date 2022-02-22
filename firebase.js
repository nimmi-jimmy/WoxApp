import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtkpnRD1UiZVcKLUEaTX1MQyhyyZ71u1w",
  authDomain: "woxspace-bcfe5.firebaseapp.com",
  projectId: "woxspace-bcfe5",
  storageBucket: "woxspace-bcfe5.appspot.com",
  messagingSenderId: "1005132616708",
  appId: "1:1005132616708:web:1ebc8ded999b05ca979151"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}