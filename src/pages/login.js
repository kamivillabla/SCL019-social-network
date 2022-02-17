import { footer } from '../component/footer.js';

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
        <div class="login__title">
          <p>Ingresa tus datos</p>
        </div>
        <div class="login__container login__gridItem">
          <input type="text" id="loginEmail" placeholder="Email"/>
          <input type="password" id="loginPassword" placeholder="Contraseña" required>
          <button class="login__buttonLogin" type="submit" role="link">Login</button>
          <p>o</p>
          <button class="login__buttonGoogle" type="button">
            <img class="login__buttonGoogle__img" src="assets/img/google.png" alt="Imagen logo de Google">Continuar con Google
          </button>
        </div>
      </form>

    <div class="login__register">
      <p>¿Aún no tienes una cuenta? <a class="login__linkRegister" href="#/registro">Registrate</a></p>
    </div>
  </main>
  `;
  loginContainer.appendChild(footer());
  return loginContainer;
};
