const openNav = document.querySelector('.open-menu-nav');
const closeNav = document.querySelector('.close-menu-nav');
const asideBar = document.querySelector('.aside-content');
const hr = document.querySelector('.hr');
const closeTheDiv = document.querySelector('.open-nav')

openNav.addEventListener('click', () => {
  asideBar.classList.toggle('active');
  openNav.style.display = 'none';
});

closeNav.addEventListener('click', () => {
  asideBar.classList.toggle('active');
  openNav.style.display = 'flex';
});