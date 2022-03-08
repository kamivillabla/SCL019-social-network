import { addData, cerrarSesion } from '../lib/firebase.js';
import { showPost } from '../component/post.js';
import { footer } from '../component/footer.js';

export const home = () => {
  const containerHome = document.createElement('section');
  containerHome.className = 'containerRootHome';
  const postHtml = `<header class="header">
  <img class="home__logoImg" src="assets/img/logoMartini.png" alt="Logo buena muchacha">
  <h1 class="home__title">BUENAS MUCHACHAS</h1>
  <i class="fa-solid fa-door-open iconsColor iconsColor__header" id="cerrarSesion"></i>
</header>
<!-- Perfil de usuaria -->
<article class="perfilDeUser">
  <div class="container-Datos">
    <spam class="barra"></spam>
    <img class="home__imgUsuaria" src="../assets/css/imgUsuarie.png" alt="Imagen de perfil">
    <h3>Nombre de usuaria</h3>
    <p>edad</p>
    <hr class="hr-perfil">
    <div class="likeAndComment">
      <span>5</span>
      <i class="fa-solid fa-heart"></i><span>7</span>
      <i class="fa-solid fa-comment"></i>
    </div>
  </div>

</article>
 <!-- Publicar -->
<main class="main-home">
  <div class="home__publicar">
    <div class="containerImgUsuaria">
      <img class="home__imgUsuaria" src="../assets/css/imgUsuarie.png" alt="Imagen usuarie">
    </div>
    <div class="home__inputPublicar">
      <h3 class="nombreUsuarie"> Nombre usuarie</h3>
      <form class="form-inpus-home" id="reset">
        <input type="text" class="home__titulo" id="titulo" placeholder="Título">
        <input type="text" class="home__description" id="descripcion" placeholder="¿Qué nos queires contar, buena muchacha?">
      </form>
     <button class="buttonPublicar" id="publicar">Publicar</button> 
    </div>
  </div>
   <!-- Publicaciones -->
   <div class="postContainer" id="postContainer">
       <!-- Aquí van los post desplegados de post.js -->
  </div>
      
</main>
<!-- Barra  -->
<div class="nav">
  <i class="fa-solid fa-user iconsColor"></i>
  <i class="fa-solid fa-filter iconsColor"></i>
  <i class="fa-solid fa-magnifying-glass iconsColor"></i>
  <i class="fa-solid fa-pen-to-square iconsColor"></i>
</div>
`;

  containerHome.innerHTML = postHtml;

  /* Guardamos los datos para agregarlos a la data */
  const post = containerHome.querySelector('#publicar');
  post.addEventListener('click', () => {
    const descripcion = containerHome.querySelector('#descripcion').value;
    const titulo = containerHome.querySelector('#titulo').value;
    /* Si los inputs de descripción y titulo estan vacios no se puede publicar */
    if (descripcion === '' || titulo === '') {
      alert('Contenido vacio. No puedes publicar');
    } else {
      addData(descripcion, titulo);
      /* Resetea el form cada vez que se le da click al botton para publicar */
      containerHome.querySelector('#reset').reset();
    }
  });
  showPost();

  /* Button cerrar sesión */
  containerHome.querySelector('#cerrarSesion').addEventListener('click', () => {
    cerrarSesion();
  });
  containerHome.appendChild(footer());
  return containerHome;
};
