/* eslint-disable no-plusplus */
/* eslint-disable no-console */
// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

// Función de la edad
export const calcularEdad = (fecha) => {
  const hoy = new Date();
  const cumpleanos = new Date(fecha);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  const m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
};
