import { footer } from "../component/footer.js";
import { newRegister, loginGoogle } from "../lib/firebase.js";

export const register = () => {
  // Acá ira lo que desplegaremos.
  const registerContainer = document.createElement("div");
  registerContainer.classList.add("containerRoot__grid");
  registerContainer.innerHTML = `
  <div class="login__logo login__gridItem">
      <img src="assets/img/logoMartini.png" alt="Imagen logo alcohdemia" class="login__logoImg">
  </div>
    <main class="login__container login__gridItem">
    <h1>BUENA MUCHACHA</h1>
      <form id="loginForm" class="login__form login__gridItem">
        <p>Ingresa tus datos</p>
        <input type="text" id="registerEmail" placeholder="Email"/>
        <spam class="login_displayNone" id="registerEmailInUse">Correo en uso</spam>
        <input type="text" id="userName" placeholder="Usuario"/>
        <input type="password" id="registerPassword" placeholder="Contraseña" required>
        <spam class="login_displayNone" id="registerWeakPassword">La contraseña debe tener al menos 6 caracteres</spam>
        <button id="registro" class="register__buttonLogin" type="submit">Registro</button>
        <p>o</p>
        <button class="login__buttonGoogle" type="button" id="registerButton">
        <img class="login__buttonGoogle__img" src="assets/img/google.png" alt="Imagen logo de Google">Continuar con Google
        </button>
      </form>
      <div class="login__register">
        <p>¿Ya tienes una cuenta? <a class="login__linkRegister" href="#/login">Haz Login</a></p>
      </div>
  </main>
  `;

  // Button Login google
  registerContainer
    .querySelector("#registerButton")
    .addEventListener("click", () => {
      loginGoogle();
    });

  // Button register
  registerContainer.querySelector("#registro").addEventListener("click", (e) => {
    e.preventDefault();
    const email = registerContainer.querySelector("#registerEmail").value;
    const password = registerContainer.querySelector("#registerPassword").value;
    const userName = registerContainer.querySelector("#userName").value;

    newRegister(email, password, userName);
  });

  registerContainer.appendChild(footer());
  return registerContainer;
};
