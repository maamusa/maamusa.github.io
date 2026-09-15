import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD97UBnOfTm_Rx5tze7GbeJT6OUjObxa2M",
  authDomain: "maamusa-blog.firebaseapp.com",
  projectId: "maamusa-blog",
  storageBucket: "maamusa-blog.firebasestorage.app",
  messagingSenderId: "359280562158",
  appId: "1:359280562158:web:9440cf5330b1bedb2608ff",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
