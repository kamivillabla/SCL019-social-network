import { login } from '../pages/login.js';
import { register } from '../pages/registro.js';

export const routes = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = ''; // Reiniciando el Div a vacio;
  switch (hash) {
    case '#/':
    case '#/login':
      containerRoot.appendChild(login());
      break;

    case '#/registro':
      containerRoot.appendChild(register());
      break;

    // En caso que ningún URL funcione o no tenga nada, nos redigire a la página de error 404
    default:
      containerRoot.innerHTML = 'ERROR';
  }
};
