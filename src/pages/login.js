import { footer } from '../component/footer.js';
import { loginGoogle, loginEmail } from '../lib/firebase.js';

export const login = () => {
  // Acá ira lo que desplegaremos.
  const loginContainer = document.createElement('div');
  loginContainer.classList.add('containerRoot__grid');
  loginContainer.innerHTML = `
  <div class="login__logo login__gridItem">
      <img src="assets/img/logoMartini.png" alt="Imagen logo alcohdemia" class="login__logoImg">
  </div>
    <main class="login__container login__gridItem">
    <h1>BUENA MUCHACHA</h1>
      <form id="loginForm" class="login__form login__gridItem">
        <p>Ingresa tus datos</p>
        <input type="text" id="loginEmail" placeholder="Email" required>
        <spam class="login_displayNone" id="loginEmailInvalido">Correo inválido</spam>
        <input type="password" id="loginPassword" placeholder="Contraseña" required>
        <spam class="login_displayNone" id="loginContrañaInvalida">Contraseña inválida</spam>
        <button id="ingreso_login" class="login__buttonLogin" type="submit" role="link">Login</button>
        <p>o</p>
        <button class="login__buttonGoogle" type="button" id="buttonGoogle">
        <img class="login__buttonGoogle__img" src="assets/img/google.png" alt="Imagen logo de Google">Continuar con Google
        </button>
      </form>
      <div class="login__register">
        <p>¿Aún no tienes una cuenta? <a class="login__linkRegister" href="#/registro">Registrate</a></p>
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
    .addEventListener('click', () => {
      // Resetear display de mensajes de error a none
      const inputEmail = document.getElementById('loginEmailInvalido');
      inputEmail.style.display = 'none';

      const inputContraseña = document.getElementById('loginContrañaInvalida');
      inputContraseña.style.display = 'none';

      // Obtener values de los inputs y aplicar la función de login
      const email = loginContainer.querySelector('#loginEmail').value;
      const password = loginContainer.querySelector('#loginPassword').value;
      loginEmail(email, password);
    });

  loginContainer.appendChild(footer());
  return loginContainer;
};
