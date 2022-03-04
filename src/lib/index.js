/* eslint-disable no-plusplus */
/* eslint-disable no-console */
// aqui exportaras las funciones que necesites

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

export const postDisplay = (array) => {
  const postContainer = document.querySelector("#postContainer");
  postContainer.innerHTML ="";
  const postCard = (element) => {
   ` <div class="containerImgUsuaria">
   <img class="home__imgUsuaria" src="../assets/css/imgUsuarie.png" alt="Imagen usuarie">
 </div>
 <div class="home__inputPublicar">
   <h3 class="nombreUsuarie">Nombre Usuarie</h3>
   <p class="publicarDescripcion" id="descripcion-${element.id}">${element.data().descripcion}</p>
   <p class="publicarDescripcion" id="etiquetas">${element.data().etiquetas}</p>
   <hr>
   <div class="likeAndComment">
     <span>5</span>
     <i class="fa-solid fa-heart"></i><span>7</span>
     <i class="fa-solid fa-comment"></i>
   </div>
 </div>`
  };

   array.forEach(postCard)
   return postDisplay
  }


