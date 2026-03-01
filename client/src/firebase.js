import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn4VwBJc59_ZSnasYNp-3zakOTs9jUxmc",
  authDomain: "shop-management-system-7a86a.firebaseapp.com",
  projectId: "shop-management-system-7a86a",
  storageBucket: "shop-management-system-7a86a.firebasestorage.app",
  messagingSenderId: "492145593278",
  appId: "1:492145593278:web:b8d19e1d4f77ff2a3cc7ef"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});