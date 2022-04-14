const teacher1 = {
    name: 'Colleen van Lent Ph.D',
    title: 'Teacher at Coursera',
    description: 'She is a lecturer at School of Information, University of Michigan and she teaches basics of HTML, CSS and Javascript on Coursera',
    featuredImage: 'colleen-van.jpeg',
}

const teacher2 = {
        name: 'Yaakov Chaikin',
        title: 'Instructor at Coursera',
        description: "Each of Yaakov's Coursera courses have made it to be a #1 TOP RATED COURSE on Coursera.org. He lectures at Johns Hopkins University and builds web applications for client/customers in person.",
    featuredImage: 'yaakov.jpg',
    }

const teacher3 = {
        name: 'Nancy Hughes',
        title: 'Teaches Web Design in New',
        description: 'She has to her credit many designs on figma. She has also taught many successful Web Designers',
        featuredImage: 'nancy.jpg',
}

const teacher4 = {
    name: 'Emily Brown',
    title: 'A Michigan CSS expert',
    description: 'She takes our student from nothing to something in CSS. By nothing to nothing, she ensures that you get the skill to that of the international standard.',    
    featuredImage: 'emili.jpg',
}

const teacher5 = {
    name: 'Stephen Wright',
    title: 'CLI expert',
    description: 'He uses the command lines on a daily, he has all you need to become a successful Web developer from the angle of CLI.',    
    featuredImage: 'steven.jpg',
}


const teacher6 = {
    name: 'Andrew Brown',
    title: 'Frontend Developer',
    description: 'He was a Google enplyee as a junior developer, now he teaches our student to Google standard.',
    featuredImage: 'andrew.jpg',
}



const teachers = [
    teacher1,
    teacher2,
    teacher3,
    teacher4,
    teacher5,
    teacher6,
]


const generateCards = () => {
    const placeInHTML = document.querySelector('.featured-teacher')
    teachers.forEach((cd) => {
        placeInHTML.insertAdjacentHTML('beforeend',
        `
        <li class="li-list">
        <div class="imageInd">
        <img class="images-cards" src="./images/${cd.featuredImage}" alt="${cd.name}">
        </div>
        <div class="description">
          <h3>${cd.name}</h3>
          <h4>${cd.title} </h4>
          <hr>
          <p>${cd.description}</p>
        </div>
    </li>
    `
      )    
    });
};

document.addEventListener("DOMContentLoaded", () => {
    generateCards();
});

