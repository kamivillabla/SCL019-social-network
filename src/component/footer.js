export const footer = () => {
  const footerContainer = document.createElement('footer');
  footerContainer.innerHTML = `
  <p>Copyright &copy; 2022 <a href="#">Javiera Munita</a>, <a href="#">Karen Escobar</a> and <a href="#">Kamila Villablanca</a></p>
  `;
  return footerContainer;
};
