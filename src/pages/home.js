import { cerrarSesion } from "../lib/firebase.js";
export const home = () => {
  const homeContainer = document.createElement("div");
  homeContainer.innerHTML = ` 
    <i class="fa-solid fa-user iconsColor"></i>
    <i class="fa-solid fa-filter iconsColor"></i>
    <i class="fa-solid fa-magnifying-glass iconsColor"></i>
    <i class="fa-solid fa-pen-to-square iconsColor"></i>
    <i class="fa-solid fa-door-open iconsColor" id="cerrarSesion"></i>

    <div> 
    <input placeholder="¿Qué quieres contarnos?">
    <input placeholder="Etiquetas">
    <button>Publicar</button> 
    </div>
  `;

  homeContainer.querySelector("#cerrarSesion").addEventListener("click", () => {
    cerrarSesion();
  });
  return homeContainer;
};
