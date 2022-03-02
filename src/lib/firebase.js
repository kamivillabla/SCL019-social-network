/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
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
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';

import {
  getFirestore,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';

import { app } from './config-firebase.js';
import { routes } from './routes.js';

const auth = getAuth();
const db = getFirestore();

// Creando colección de datos (noticia en proceso)

const userData = async (userId, userName, age) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      id: userId,
      name: userName,
      age,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
//coleccion leer datos para despues publicar
export const publicar = async (userId,userName,descripcion,etiquetas) => {
  try {
    const docRef = await addDoc(collection(db, "post"), {
      id: userId,
      name: userName,
      descripcion: descripcion,
      etiquetas: etiquetas
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Crear nueva cuenta
export const newRegister = (email, password, userName, age) => {
  createUserWithEmailAndPassword(auth, email, password, userName)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      userData(auth.currentUser.uid, userName, age);
      console.log('hola');
      verificar();
      alert(
        'Se ha enviado un correo electrónico de verificación. Por favor revisa tu bandeja de entrada o spam.',
      );
      window.location.hash = '#/login';
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // display mensaje de error
      // ..
      console.log(errorCode + errorMessage);
      // return errorCode + errorMessage;
      // Llamada constantes
      const missingEmail = document.getElementById('missinEmail');
      const loginNulo = document.getElementById('loginEmailNull');
      const emailInUse = document.getElementById('registerEmailInUse');
      const weakPassword = document.getElementById('registerWeakPassword');
      const missingPassword = document.getElementById('missinPassword');

      // Error campo correo vacio:
      if (errorCode == 'auth/missing-email') {
        missingEmail.style.display = 'block';
        emailInUse.style.display = 'none';
        loginNulo.style.display = 'none';
      }
      if (errorCode == 'auth/invalid-email') {
        loginNulo.style.display = 'block';
        missingEmail.style.display = 'none';
        emailInUse.style.display = 'none';
      }
      // Mensaje correo en uso
      if (errorCode == 'auth/email-already-in-use') {
        emailInUse.style.display = 'block';
        missingEmail.style.display = 'none';
        loginNulo.style.display = 'none';
      }
      // Mensaje contraseña demasiado debil (Menos de 6 caracteres)
      if (errorCode == 'auth/weak-password') {
        weakPassword.style.display = 'block';
        missingPassword.style.display = 'none';
      }
      // Error campo de contraseña vacio
      if (errorCode == 'auth/internal-error') {
        missingPassword.style.display = 'block';
        weakPassword.style.display = 'none';
      }
    });
  return createUserWithEmailAndPassword;
};

// Login google
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

// Login con email y contraseña
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

      // Constantes
      const errorContraseña = document.getElementById('loginContrañaInvalida');
      const loginNulo = document.getElementById('loginEmailNull');
      const errorEmail = document.getElementById('loginEmailInvalido');
      const passwordNull = document.getElementById('loginContraseñaVacia');
      // Contraseña incorrecta
      if (errorCode == 'auth/wrong-password') {
        errorContraseña.style.display = 'block';
        passwordNull.style.display = 'none';
      }
      // Ingresar correo valido
      if (errorCode == 'auth/invalid-email') {
        loginNulo.style.display = 'block';
        errorEmail.style.display = 'none';
      }
      // Email invalido
      if (errorCode == 'auth/user-not-found') {
        errorEmail.style.display = 'block';
        loginNulo.style.display = 'none';
      }
      // Campo contraseña vacio:
      if (errorCode == 'auth/internal-error') {
        passwordNull.style.display = 'block';
        errorContraseña.style.display = 'none';
      }
    });
};

// Función que envía un correo de verificación al registrarse con email y contraseña.
const verificar = () => {
  sendEmailVerification(auth.currentUser).then(() => {
    console.log('Mail enviado');
    // Email verification sent!
    // ...
  });
};

export const cerrarSesion = () => {
  signOut(auth)
    .then(() => {
      alert('Chaito');
      window.location.hash = '#/login';
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

// Aquí aprendimos que el usuario es un objeto. Trabajo en proceso.
export const observador = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      window.location.hash = '#/home';
      routes(window.location.hash);

      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      const userName = user.displayName;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};
observador();
