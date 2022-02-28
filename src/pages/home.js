export const home = () => {
  const homeContainer = document.createElement('div');
  homeContainer.innerHTML = ` 
    <i class="fa-solid fa-user iconsColor"></i>
    <i class="fa-solid fa-filter iconsColor"></i>
    <i class="fa-solid fa-magnifying-glass iconsColor"></i>
    <i class="fa-solid fa-pen-to-square iconsColor"></i>
  `;
  return homeContainer;
};
