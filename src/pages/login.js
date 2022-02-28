import { footer } from '../component/footer.js';
import { loginGoogle, loginEmail } from '../lib/firebase.js';

export const login = () => {
  // Acá ira lo que desplegaremos.
  const loginContainer = document.createElement('div');
  loginContainer.classList.add('containerRoot__grid');
  loginContainer.innerHTML = `
  <div class=" logo  gridItem">
      <img src="assets/img/logoMartini.png" alt="Imagen logo alcohdemia" class=" logoImg">
  </div>
    <main class=" container  gridItem">
    <h1>BUENA MUCHACHA</h1>
      <form id="loginForm" class=" form  gridItem">
        <p>Ingresa tus datos</p>
        <input class="inputNames" type="text" id="loginEmail" placeholder="Correo Electrónico" required>
        <spam class="displayNone" id="loginEmailInvalido">Este correo no está registrado</spam>
        <spam class="displayNone" id="loginEmailNull">Ingrese un correo válido</spam>
        <input class="inputNames" type="password" id="loginPassword" placeholder="Contraseña" required>
        <spam class="displayNone" id="loginContrañaInvalida">Contraseña inválida</spam>
        <spam class="displayNone" id="loginContraseñaVacia">Ingresa una contraseña</spam>
        <button id="ingreso_login" class=" buttonLogin" type="submit" role="link">Iniciar Sesión</button>
        <p>o</p>
        <button class=" buttonGoogle" type="button" id="buttonGoogle">
        <img class=" buttonGoogle__img" src="assets/img/google.png" alt="Imagen logo de Google">Continuar con Google
        </button>
      </form>
      <div class=" register">
        <p>¿Aún no tienes una cuenta? <a class=" linkRegister" href="#/registro">Regístrate</a></p>
      </div>
  </main>
  `;

  // Button Login google
  loginContainer
    .querySelector('#buttonGoogle')
    .addEventListener('click', () => {
      loginGoogle();
    });
  // ingreso login
  loginContainer
    .querySelector('#ingreso_login')
    .addEventListener('click', (e) => {
      e.preventDefault();

      // Obtener values de los inputs y aplicar la función de login
      const email = loginContainer.querySelector('#loginEmail').value;
      const password = loginContainer.querySelector('#loginPassword').value;
      loginEmail(email, password);
    });
  loginContainer.appendChild(footer());
  return loginContainer;
};
