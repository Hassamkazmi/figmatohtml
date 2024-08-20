
// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmZIWUS9ap4eBGM5uy5OfZh_mMp03aC90",
  authDomain: "auth-957b9.firebaseapp.com",
  projectId: "auth-957b9",
  storageBucket: "auth-957b9.appspot.com",
  messagingSenderId: "714958868838",
  appId: "1:714958868838:web:86026f118d2fc01e1e38a7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
