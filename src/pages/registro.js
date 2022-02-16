import { footer } from "../component/footer.js";
import { auth, registro } from "../lib/firebase.js";

export const register = () => {
  // Acá ira lo que desplegaremos.
  const loginContainer = document.createElement("div");
  loginContainer.classList.add("containerRoot__grid");
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
          <input type="text" id="registerEmail" placeholder="Email"/>
          <input type="text" id="userName" placeholder="Usuario"/>
          <input type="password" id="registerPassword" placeholder="Contraseña" required>
          <button class="register__buttonLogin" type="submit" role="link">Registro</button>
          <p>o</p>
          <button class="login__buttonGoogle" type="button" id="registerButton">
            <img class="login__buttonGoogle__img" src="assets/img/google.png" alt="Imagen logo de Google">Continuar con Google
          </button>
        </div>
      </form>

    <div class="login__register">
      <p>¿Ya tienes una cuenta? <a class="login__linkRegister" href="#/register">Haz Login</a></p>
    </div>
  </main>
  `;
  loginContainer.appendChild(footer());
  return loginContainer;
};

const btnRegister = document.getElementById("registerButton");

//const userName = document.getElementById("userName").value;

btnRegister.addEventListener("click", () => {
  const email = document.getElementById("registerEmail");
  const password = document.getElementById("registerPassword");
  registro(email.value, password.value);
});

//return btnRegister;
