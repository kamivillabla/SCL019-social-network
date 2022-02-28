import { myFunction } from "./lib/index.js";

import { routes } from "./lib/routes.js";

// import { observador } from "./lib/firebase.js";

myFunction();

// eslint-disable-next-line max-len

// Con esta función le agregamos la nueva url: '#/login' al comenzar la página.

const init = () => {
  window.location.hash = "#/login";
  routes(window.location.hash);
  // observador();
};

init();

// Al terminar de cargar la página(Event Load) se ejecuta la función INIT.
// window.addEventListener('load', init);

/*  El evento hashchange es ejecutado cuando el fragmento identificador de la URL ha cambiado. */
window.addEventListener("hashchange", () => {
  routes(window.location.hash);
});
