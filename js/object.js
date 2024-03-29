const mainCurriculum = [
  {
    id: 'card1',
    font: '<i class="fa fas-brands fa-html5"></i>',
    name: 'HTML',
    description: ' Hypertext Markup Language is the starting point',
  },
  {
    id: 'card2',
    font: '<i class="fab fa-css3-alt fa-1x"></i>',
    name: 'CSS',
    description: 'CSS is known as Cascading Style Sheet and it is responsible for the syling of the site.',
  },
  {
    id: 'card3',
    font: '<i class="fab fa-js fa-1x"></i>',
    name: 'Javascript',
    description: 'Javascript is responsible for the functionality and interactiveness of the website.',
  },
  {
    id: 'card4',
    font: '<i class="fab fa-git-alt fa-1x"></i>',
    name: 'Git/Github',
    description: 'Learn the usage of Git, a version control system.',
  },
  {
    id: 'card5',
    font: '<i class="fas fa-terminal fa-1x"></i>',
    name: 'CLI',
    description: 'CLI is the command line interface. Learn how to use the interface proficiently.',
  },
];

const afterHeader = document.querySelector('.bigger-body');
afterHeader.insertAdjacentHTML('afterend', `  
  <main class="main-curriculum">
    <div class="main-curriculum-bg">
      <div class="body-content">
        <div class="body-content-block">
          <h3 class="main-curriculum-h3"> Main Curriculum </h3>
          <hr class="hr">
        </div>
      </div>

      <div class="center-lang-body">
        <div class="languages-body">
        </div>
      </div>
          
      <div class="whole-program-container">
        <a href="#" class="whole-program"> SEE THE WHOLE PROGRAMME</a>
      </div>
      <div class="join-our-course-btn-container">
        <button class="join-our-course">
          Join our course for 2022
        </button>
      </div>
    </div>
  </main>
`);

const content = document.querySelector('.languages-body');
for (let i = 0; i < mainCurriculum.length; i += 1) {
  content.insertAdjacentHTML('afterbegin', `
    <div class="languages">
      <div class="font-for-lang">${mainCurriculum[i].font}</div>
      <h3 class="language-h3">${mainCurriculum[i].name}</h3>
      <p class="languages-para">${mainCurriculum[i].description}</p>
    </div>
  `);
}
