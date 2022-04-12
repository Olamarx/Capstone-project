"use strict";

var openNav = document.querySelector('.open-nav');
var closeNav = document.querySelector('.close-nav');
var asideBar = document.querySelector('.aside-content');
var hr = document.querySelector('.hr');
openNav.addEventListener('click', function () {
  asideBar.classList.toggle('active');
  openNav.style.display = "none";
  hr.style.display = "none";
});
closeNav.addEventListener('click', function () {
  asideBar.classList.toggle('active');
  openNav.style.display = "flex";
});