/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import { readData, deletedDataPost, auth, likes } from '../lib/firebase.js';

export const newPost = (posts) => {
  const containerPost = document.getElementById('postContainer');
  containerPost.innerHTML = '';
  const postContent = (postData) => {
    const templatePost = `<div class="home__publicaciones">
    <div class="containerImgUsuaria">
      <img class="home__imgUsuaria" src="../assets/css/imgUsuarie.png" alt="Imagen usuarie">
    </div>
    <div class="home__inputPublicar">
      <div class="containerNameUsarieYdelete">
        <h3 class="nombreUsuarie">Usuarie</h3> 
       <button class="icons-delete delete" value=${postData.element.id} id="button"><i class="fa-solid fa-trash-arrow-up"></i></button>
      </div>
      <p class="publicarDescripcion"> ${postData.element.data.titulos}.</p>
      <p class="publicarDescripcion"> ${postData.element.data.description}.</p>
      <hr>
        <div class="likeAndComment">
          <button class="buttonLike" value=${postData.element.id}> <span class="counterLike">${postData.element.data.likesCounter}</span> <i class="fa-solid fa-heart"></i></button>
         <span class="counterLike">7</span>
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

  /* Dar like */
  const buttonLike = containerPost.querySelectorAll('.buttonLike');
  buttonLike.forEach((like) => {
    like.addEventListener('click', () => {
      const postIdLike = like.value;
      const userId = auth.currentUser.uid;
      likes(postIdLike, userId);
    });
  });

  return containerPost;
};

/* Exporta los post para mostrarlos en el home */
export const showPost = () => {
  readData(newPost, 'publicaciones');
};
