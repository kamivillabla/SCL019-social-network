// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';

import { app } from './config-firebase.js';

const auth = getAuth();

export const newRegister = (email, password) => {
  // retornar esta funcion, hacer cambio de hash
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      return errorCode + errorMessage;
    });
  return createUserWithEmailAndPassword;
};
