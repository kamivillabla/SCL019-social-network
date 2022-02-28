import { login } from "../pages/login.js";
import { register } from "../pages/registro.js";
import { home } from "../pages/home.js";

export const routes = (hash) => {
  const containerRoot = document.getElementById("root");
  containerRoot.innerHTML = ""; // Reiniciando el Div a vacio;
  switch (hash) {
    case "#/":
    case "#/login":
      containerRoot.appendChild(login());
      break;

    case "#/registro":
      containerRoot.appendChild(register());
      break;

    case "#/home":
      containerRoot.appendChild(home());
      break;

    // En caso que el url no sea correcto, nos redigire a la página de "No esta disponible".
    default:
      containerRoot.innerHTML = "Esta página no esta disponible";
  }
};
