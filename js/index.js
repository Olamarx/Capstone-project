const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const asideBar = document.querySelector('.aside-content');
const hr = document.querySelector('.hr');

openNav.addEventListener('click', () => {
  asideBar.classList.toggle('active');
  openNav.style.display = 'none';
  hr.style.display = 'none';
});

closeNav.addEventListener('click', () => {
  asideBar.classList.toggle('active');
  openNav.style.display = 'flex';
});