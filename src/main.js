// Este es el punto de entrada de tu aplicacion
import { login } from './pages/login.js';

import { myFunction } from './lib/index.js';

myFunction();

const rootContainer = document.getElementById('root');

rootContainer.appendChild(login());
