"use strict";

var teacher1 = {
  name: 'Owoeye Olaoluwa',
  title: 'Student at Microverse',
  description: 'A student at Microverse as at the time of writing this code and a law student at Obafemi Aolowo University',
  featuredImage: 'ola.jpeg'
};
var teacher2 = {
  name: 'Obafemi Ireoluwa',
  title: 'A law student',
  description: "He is an Intellectual Law enthusiast and the majority leader of the Law Students' Representative Council, Law Students' Society, Obafemi Awolowo University. Anything you could think of about Law.",
  featuredImage: 'ire.jpeg'
};
var teacher3 = {
  name: 'Colleen van Lent Ph.D',
  title: 'Teacher at Coursera',
  description: 'She is a lecturer at School of Information, University of Michigan and she teaches basics of HTML, CSS and Javascript on Coursera',
  featuredImage: 'colleen-van.jpeg'
};
var teacher4 = {
  name: 'Yaakov Chaikin',
  title: 'Instructor at Coursera',
  description: "Each of Yaakov's Coursera courses have made it to be a #1 TOP RATED COURSE on Coursera.org. He lectures at Johns Hopkins University and builds web applications for client/customers in person.",
  featuredImage: 'yaakov.jpg'
};
var teacher5 = {
  name: 'Nancy Hughes',
  title: 'Teaches Web Design in New',
  description: 'She has to her credit many designs on figma. She has also taught many successful Web Designers',
  featuredImage: 'nancy.jpg'
};
var teacher6 = {
  name: 'Emily Brown',
  title: 'A Michigan CSS expert',
  description: 'She takes our student from nothing to something in CSS. By nothing to nothing, she ensures that you get the skill to that of the international standard.',
  featuredImage: 'emili.jpg'
};
var teacher7 = {
  name: 'Stephen Wright',
  title: 'CLI expert',
  description: 'He uses the command lines on a daily, he has all you need to become a successful Web developer from the angle of CLI.',
  featuredImage: 'steven.jpg'
};
var teacher8 = {
  name: 'Andrew Brown',
  title: 'Frontend Developer',
  description: 'He was a Google enplyee as a junior developer, now he teaches our student to Google standard.',
  featuredImage: 'andrew.jpg'
};
var teachers = [teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8];

var generateCards = function generateCards() {
  var placeInHTML = document.querySelector('.featured-teacher');
  teachers.forEach(function (cd) {
    placeInHTML.insertAdjacentHTML('beforeend', "\n        <li class=\"li-list\">\n        <div class=\"imageInd\">\n        <img class=\"images-cards\" src=\"./images/".concat(cd.featuredImage, "\" alt=\"").concat(cd.name, "\">\n        </div>\n        <div class=\"description\">\n          <h3>").concat(cd.name, "</h3>\n          <h4>").concat(cd.title, " </h4>\n          <hr>\n          <p>").concat(cd.description, "</p>\n        </div>\n    </li>\n    "));
  });
};

document.addEventListener('DOMContentLoaded', function () {
  generateCards();
});