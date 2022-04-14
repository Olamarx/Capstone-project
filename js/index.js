const openNav = document.querySelector('.open-menu-nav');
const closeNav = document.querySelector('.close-menu-nav');
const asideBar = document.querySelector('.aside-content');

openNav.addEventListener('click', () => {
  asideBar.classList.toggle('active');
  openNav.style.display = 'none';
});

closeNav.addEventListener('click', () => {
  asideBar.classList.toggle('active');
  openNav.style.display = 'flex';
});