const openNav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')
const asideBar = document.querySelector('.aside-content')


openNav.addEventListener('click', () => {
    asideBar.classList.toggle('active');
    openNav.style.display = "none";
});

closeNav.addEventListener('click', () => {
    asideBar.classList.toggle('active');
    openNav.style.display = "flex";
});