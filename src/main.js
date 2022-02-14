// Este es el punto de entrada de tu aplicacion
import { login } from './pages/login.js';

import { myFunction } from './lib/index.js';

myFunction();

// eslint-disable-next-line max-len
/* Llamamos nuestro div root que esta en index.html y dentro le damos nuestro login.js para que se muestre */
const rootContainer = document.getElementById('root');
rootContainer.appendChild(login());
