"use strict";

var openNav = document.querySelector('.open-menu-nav');
var closeNav = document.querySelector('.close-menu-nav');
var asideBar = document.querySelector('.aside-content');
var hr = document.querySelector('.hr');
var closeTheDiv = document.querySelector('.open-nav');
openNav.addEventListener('click', function () {
  asideBar.classList.toggle('active');
  openNav.style.display = 'none';
});
closeNav.addEventListener('click', function () {
  asideBar.classList.toggle('active');
  openNav.style.display = 'flex';
});