// src/firebase/config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMzou7IFEw5qAcrIg60sJg2h2-q7axvRM",
  authDomain: "my-shop-be1c1.firebaseapp.com",
  projectId: "my-shop-be1c1",
  storageBucket: "my-shop-be1c1.firebasestorage.app",
  messagingSenderId: "65500208315",
  appId: "1:65500208315:web:c1e91671f080be90fb9d9e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;