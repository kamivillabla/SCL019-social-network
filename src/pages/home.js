export const home = () => {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('containerRoot__grid');
  homeContainer.innerHTML = ' hola soy un home';

  return homeContainer;
};
