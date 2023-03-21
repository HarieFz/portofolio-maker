import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDq4fkObrPJss4JaADNnWczpgLMKJ13sWU",
  authDomain: "portofolio-maker-93914.firebaseapp.com",
  projectId: "portofolio-maker-93914",
  storageBucket: "portofolio-maker-93914.appspot.com",
  messagingSenderId: "226821394193",
  appId: "1:226821394193:web:982c3496b27d442bc246b0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
