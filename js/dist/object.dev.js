"use strict";

var mainCurriculum = [{
  id: 'card1',
  font: '<i class="fa fas-brands fa-html5"></i>',
  name: 'HTML',
  description: ' Hypertext Markup Language is the starting point'
}, {
  id: 'card2',
  font: '<i class="fab fa-css3-alt fa-1x"></i>',
  name: 'CSS',
  description: 'CSS is known as Cascading Style Sheet and it is responsible for the syling of the site.'
}, {
  id: 'card3',
  font: '<i class="fab fa-js fa-1x"></i>',
  name: 'Javascript',
  description: 'Javascript is responsible for the functionality and interactiveness of the website.'
}, {
  id: 'card4',
  font: '<i class="fab fa-git-alt fa-1x"></i>',
  name: 'Git/Github',
  description: 'Learn the usage of Git, a version control system.'
}, {
  id: 'card5',
  font: '<i class="fas fa-terminal fa-1x"></i>',
  name: 'CLI',
  description: 'CLI is the command line interface. Learn how to use the interface proficiently.'
}];
var afterHeader = document.querySelector('.bigger-body');
afterHeader.insertAdjacentHTML('afterend', "  \n  <main class=\"main-curriculum\">\n    <div class=\"main-curriculum-bg\">\n      <div class=\"body-content\">\n        <div class=\"body-content-block\">\n          <h3 class=\"main-curriculum-h3\"> Main Curriculum </h3>\n          <hr class=\"hr\">\n        </div>\n      </div>\n\n      <div class=\"center-lang-body\">\n      <div class=\"languages-body\">\n\n      </div>\n          </div>\n          \n          <div class=\"whole-program-container\">\n          <a href=\"#\" class=\"whole-program\"> SEE THE WHOLE PROGRAMME</a>\n          </div>\n          <div class=\"join-our-course-btn-container\">\n          <button class=\"join-our-course\">\n          Join our course for 2022\n          </button>\n          </div>\n          </div>\n          </main>\n          ");
var content = document.querySelector('.languages-body');

for (var i = 0; i < mainCurriculum.length; i += 1) {
  content.insertAdjacentHTML('afterbegin', "\n          <div class=\"languages\">\n          <div class=\"font-for-lang\">".concat(mainCurriculum[i].font, "</div>\n          <h3 class=\"language-h3\">").concat(mainCurriculum[i].name, "</h3>\n          <p class=\"languages-para\">").concat(mainCurriculum[i].description, "</p>\n          </div>\n  "));
}