// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTvL5x6vuYIrSymoYz39wVVNQfnCU6DAk",
  authDomain: "scl019-social-network-test.firebaseapp.com",
  projectId: "scl019-social-network-test",
  storageBucket: "scl019-social-network-test.appspot.com",
  messagingSenderId: "667261096630",
  appId: "1:667261096630:web:9d4a4ad390d13ac1bccc17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

export const auth = getAuth();
export const registro = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
