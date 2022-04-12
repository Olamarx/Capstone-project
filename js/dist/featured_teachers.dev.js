"use strict";

var teachers = [{
  id: 'card1',
  name: 'Colleen van Lent Ph.D',
  title: 'Teacher at Coursera',
  image: '',
  description: 'She is a lecturer at School of Information, University of Michigan and she teaches basics of HTML, CSS and Javascript on Coursera',
  seeLive: '#',
  seeSource: '#'
}, {
  id: 'card2',
  name: 'Yaakov Chaikin',
  title: 'Instructor at Coursera',
  image: '',
  description: "Each of Yaakov's Coursera courses have made it to be a #1 TOP RATED COURSE on Coursera.org. He lectures at Johns Hopkins University and builds web applications for client/customers in person.",
  seeLive: '#',
  seeSource: '#'
}, {
  id: 'card3',
  name: 'Nancy Hughes',
  title: 'Teaches Web Design in New',
  image: '',
  description: 'She has to her credit many designs on figma',
  seeLive: '#',
  seeSource: '#'
}, {
  id: 'card4',
  name: 'Emily Brown',
  title: 'A Michigan CSS expert',
  image: '',
  description: 'She takes our student from nothing to something in CSS.',
  seeLive: '#',
  seeSource: '#'
}, {
  id: 'card5',
  name: 'Stephen Wright',
  title: 'CLI expert',
  image: '',
  description: 'He uses the command lines on a daily, he has all you need to become a successful Web developer from the angle of CLI.',
  seeLive: '#',
  seeSource: '#'
}, {
  id: 'card6',
  name: 'Andrew Brown',
  title: 'Frontend Developer',
  image: '',
  description: 'He was a Google enplyee as a junior developer, now he teaches our student to Google standard.',
  seeLive: '#',
  seeSource: '#'
}];
var featuredTeachers = document.querySelector('.main-curriculum');
featuredTeachers.insertAdjacentHTML('afterend', "\n<section class=\"featured-teacher\"> \n    <div class=\"featured-teachers-center\">\n        <h3 class=\"featured-teachers-h3\">\n            Featured Teachers\n        </h3>\n        <hr class=\"hr\">\n    </div>\n<div class=\"body-of-whole-card\">\n\n\n\n    <div class=\"cards\">\n        <div class=\"card-image\"> <div class=\"card-image-2 card-1\">\n        </div>\n        </div>\n\n       <div class=\"image-content-body\">\n        <div class=\"image-content\">\n            <h3 class=\"name\">\n                ".concat(teachers[0].name, "\n            </h3>\n            \n            <div class=\"course-taken\">\n                <h5 class=\"course-taken-h5\">\n                ").concat(teachers[0].title, "\n                </h5>\n            </div>\n            <hr class=\"teacher-hr\">\n        </div>\n\n        <div class=\"teacher-content-para\">\n            <p class=\"teacher-content-paragraph\"> ").concat(teachers[0].description, " </p>\n        </div>\n       </div>\n    </div>\n\n    <div class=\"cards\">\n        <div class=\"card-image\"> <div class=\"card-image-2  card-2\">\n        </div>\n        </div>\n\n       <div class=\"image-content-body\">\n        <div class=\"image-content\">\n            <h3 class=\"name\">\n            ").concat(teachers[1].name, "\n            </h3>\n            \n            <div class=\"course-taken\">\n                <h5 class=\"course-taken-h5\">\n                ").concat(teachers[1].title, "\n                </h5>\n            </div>\n            <hr class=\"teacher-hr\">\n        </div>\n\n        <div class=\"teacher-content-para\">\n            <p class=\"teacher-content-paragraph\">\n            ").concat(teachers[1].description, "</p>\n        </div>\n       </div>\n    </div>\n\n    <div class=\"cards\">\n        <div class=\"card-image\"> <div class=\"card-image-2  card-5\">\n        </div>\n        </div>\n\n       <div class=\"image-content-body\">\n        <div class=\"image-content\">\n            <h3 class=\"name\">\n            ").concat(teachers[4].name, "\n            </h3>\n            \n            <div class=\"course-taken\">\n                <h5 class=\"course-taken-h5\">\n                ").concat(teachers[4].title, "\n                </h5>\n            </div>\n            <hr class=\"teacher-hr\">\n        </div>\n\n        <div class=\"teacher-content-para\">\n            <p class=\"teacher-content-paragraph\">\n            ").concat(teachers[4].description, "  </p>\n        </div>\n       </div>\n    </div>\n\n\n    <div class=\"cards\">\n        <div class=\"card-image\"> <div class=\"card-image-2 card-6\">\n        </div>\n        </div>\n\n       <div class=\"image-content-body\">\n        <div class=\"image-content\">\n            <h3 class=\"name\">\n            ").concat(teachers[5].name, "\n            </h3>\n            \n            <div class=\"course-taken\">\n                <h5 class=\"course-taken-h5\">\n                ").concat(teachers[5].title, "\n                </h5>\n            </div>\n            <hr class=\"teacher-hr\">\n        </div>\n\n        <div class=\"teacher-content-para\">\n            <p class=\"teacher-content-paragraph\">\n            ").concat(teachers[5].description, " </p>\n            </div>\n            </div>\n            </div>\n            <div class=\"cards\">\n                <div class=\"card-image\"> <div class=\"card-image-2  card-3\">\n                </div>\n                </div>\n            \n               <div class=\"image-content-body\">\n                <div class=\"image-content\">\n                    <h3 class=\"name\">\n                    ").concat(teachers[2].name, "\n                    </h3>\n                    \n                    <div class=\"course-taken\">\n                        <h5 class=\"course-taken-h5\">\n                        ").concat(teachers[2].title, "\n                        </h5>\n                    </div>\n                    <hr class=\"teacher-hr\">\n                </div>\n            \n                <div class=\"teacher-content-para\">\n                    <p class=\"teacher-content-paragraph\">\n                    ").concat(teachers[2].description, "         </p>\n                </div>\n                </div>\n                </div>\n                \n                \n                <div class=\"cards\">\n                    <div class=\"card-image\"> <div class=\"card-image-2  card-4\">\n                    </div>\n                    </div>\n            \n                   <div class=\"image-content-body\">\n                   <div class=\"image-content\">\n                   <h3 class=\"name\">\n                   ").concat(teachers[3].name, "\n                   </h3>\n                   \n                   <div class=\"course-taken\">\n                            <h5 class=\"course-taken-h5\">\n                            ").concat(teachers[3].title, "\n                            </h5>\n                        </div>\n                        <hr class=\"teacher-hr\">\n                    </div>\n            \n                    <div class=\"teacher-content-para\">\n                        <p class=\"teacher-content-paragraph\">\n                        ").concat(teachers[3].description, "    </p>\n                    </div>\n                   </div>\n                </div>\n                </div>\n                </section>\n\n            <!---- Partners ---->\n\n                <section class=\"partner-section\">\n    <div class=\"partner-content\">\n        <h3 class=\"partner-h3\">\n            Partner\n        </h3>\n        <hr class=\"partner-hr\">\n\n        <div class=\"adverts\">\n    <span class=\"font-and-content\">\n        <i class=\"fab fa-google\"> </i> Google\n    </span>\n    <span class=\"font-and-content\">\n        <i class=\"fab fa-airbnb\"> </i> Airbnb\n    </span>\n    <span class=\"font-and-content\">\n        <i class=\"fab fa-microsoft\"> </i> Microsoft\n    </span>\n    <span class=\"font-and-content\">\n        <i class=\"fab fa-apple\"> </i>Apple\n    </span>\n    <span class=\"font-and-content\">\n        <i class=\"fab fa-free-code-camp\"> </i>Apple\n    </span>\n        </div>\n    </div>\n</section>\n"));