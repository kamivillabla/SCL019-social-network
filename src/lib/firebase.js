/* eslint-disable no-unreachable */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
import { app } from './config-firebase.js';

const auth = getAuth();

// Crear nueva cuenta

export const newRegister = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.hash = '#/login';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // display mensaje de error
      // ..
      console.log(errorCode);
      // return errorCode + errorMessage;
      // Mensaje correo en uso
      if (errorCode == 'auth/email-already-in-use') {
        const emailInUse = document.getElementById(
          'registerEmailInUse',
        );
        emailInUse.style.display = 'block';
      }
      // Mensaje contraseña demasiado debil (Menos de 6 caracteres)
      if (errorCode == 'auth/weak-password') {
        const weakPassword = document.getElementById('registerWeakPassword');
        weakPassword.style.display = 'block';
      }
    });
  return createUserWithEmailAndPassword;
};

// login google
export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      window.location.hash = '#/home';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// login con email y contraseña
export const loginEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert('ingresaste');
      // LLeva al home
      window.location.hash = '#/home';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      if (errorCode == 'auth/wrong-password') {
        const errorContraseña = document.getElementById(
          'loginContrañaInvalida',
        );
        errorContraseña.style.display = 'block';
      }
      if (errorCode == 'auth/user-not-found') {
        const errorEmail = document.getElementById('loginEmailInvalido');
        errorEmail.style.display = 'block';
      }
    });
};
