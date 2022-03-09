/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import { readData, deletedDataPost } from '../lib/firebase.js';

export const newPost = (posts) => {
  const containerPost = document.getElementById('postContainer');
  containerPost.innerHTML = '';
  const postContent = (postData) => {
    const templatePost = `<div class="home__publicaciones">
    <div class="containerImgUsuaria">
      <img class="home__imgUsuaria" src="${postData.element.data.photo}" alt="Imagen usuarie">
    </div>
    <div class="home__inputPublicar">
      <h3 class="nombreUsuarie">${postData.element.data.name}</h3>
      <button value=${postData.element.id} id="button" class="delete" > Delete</button>
      <p class="publicarDescripcion"> ${postData.element.data.description}.</p>
      <p class="publicarDescripcion"> ${postData.element.data.titulos}.</p>
      <hr>
        <div class="likeAndComment">
          <span>5</span>
          <i class="fa-solid fa-heart"></i><span>7</span>
          <i class="fa-solid fa-comment"></i>
        </div>
    </div>
</div>`;
    containerPost.innerHTML += templatePost;
  };

  /* Recorre los post y los despliega todos en la pantalla */
  posts.forEach(postContent);

  /* Elimina los post: Se toman todos los botones, se recorren y se les agrega el evento que al hacer click los elimina. */
  const buttonDelete = containerPost.querySelectorAll('.delete');
  buttonDelete.forEach((button) => {
    button.addEventListener('click', () => {
      if (confirm('Estas a punto de eliminar tu post! Deseas continuar?')) {
        deletedDataPost(button.value);
      }
    });
  });

  return containerPost;
};

/* Exporta los post para mostrarlos en el home */
export const showPost = () => {
  readData(newPost, 'publicaciones');
};
