const teachers = [
    {
      id: 'card1',
      name: 'Colleen van Lent Ph.D',
      title: 'Teacher at Coursera',
      image: '',
      description: 'She is a lecturer at School of Information, University of Michigan and she teaches basics of HTML, CSS and Javascript on Coursera',
      seeLive: '#',
      seeSource: '#',
    },
    {
      id: 'card2',
      name: 'Yaakov Chaikin',
      title: 'Instructor at Coursera',
      image: '',
      description: "Each of Yaakov's Coursera courses have made it to be a #1 TOP RATED COURSE on Coursera.org. He lectures at Johns Hopkins University and builds web applications for client/customers in person.",
      seeLive: '#',
      seeSource: '#',
    },
    {
      id: 'card3',
      name: 'Nancy Hughes',
      title: 'Teaches Web Design in New',
      image: '',
      description: 'She has to her credit many designs on figma',
      seeLive: '#',
      seeSource: '#',
    },
    {
      id: 'card4',
      name: 'Emily Brown',
      title: 'A Michigan CSS expert',
      image: '',
      description: 'She takes our student from nothing to something in CSS.',
      seeLive: '#',
      seeSource: '#',
    },
    {
      id: 'card5',
      name: 'Stephen Wright',
      title: 'CLI expert',
      image: '',
      description: 'He uses the command lines on a daily, he has all you need to become a successful Web developer from the angle of CLI.',
      seeLive: '#',
      seeSource: '#',
    },
    {
      id: 'card6',
      name: 'Andrew Brown',
      title: 'Frontend Developer',
      image: '',
      description: 'He was a Google enplyee as a junior developer, now he teaches our student to Google standard.',
      seeLive: '#',
      seeSource: '#',
    },
  ];

  const featuredTeachers = document.querySelector('.main-curriculum');

featuredTeachers.insertAdjacentHTML('afterend', `
<section class="featured-teacher"> 
    <div class="featured-teachers-center">
        <h3 class="featured-teachers-h3">
            Featured Teachers
        </h3>
        <hr class="hr">
    </div>
<div class="body-of-whole-card">



    <div class="cards">
        <div class="card-image"> <div class="card-image-2 card-1">
        </div>
        </div>

       <div class="image-content-body">
        <div class="image-content">
            <h3 class="name">
                ${teachers[0].name}
            </h3>
            
            <div class="course-taken">
                <h5 class="course-taken-h5">
                ${teachers[0].title}
                </h5>
            </div>
            <hr class="teacher-hr">
        </div>

        <div class="teacher-content-para">
            <p class="teacher-content-paragraph"> ${teachers[0].description} </p>
        </div>
       </div>
    </div>

    <div class="cards">
        <div class="card-image"> <div class="card-image-2  card-2">
        </div>
        </div>

       <div class="image-content-body">
        <div class="image-content">
            <h3 class="name">
            ${teachers[1].name}
            </h3>
            
            <div class="course-taken">
                <h5 class="course-taken-h5">
                ${teachers[1].title}
                </h5>
            </div>
            <hr class="teacher-hr">
        </div>

        <div class="teacher-content-para">
            <p class="teacher-content-paragraph">
            ${teachers[1].description}</p>
        </div>
       </div>
    </div>

    <div class="cards">
        <div class="card-image"> <div class="card-image-2  card-5">
        </div>
        </div>

       <div class="image-content-body">
        <div class="image-content">
            <h3 class="name">
            ${teachers[4].name}
            </h3>
            
            <div class="course-taken">
                <h5 class="course-taken-h5">
                ${teachers[4].title}
                </h5>
            </div>
            <hr class="teacher-hr">
        </div>

        <div class="teacher-content-para">
            <p class="teacher-content-paragraph">
            ${teachers[4].description}  </p>
        </div>
       </div>
    </div>


    <div class="cards">
        <div class="card-image"> <div class="card-image-2 card-6">
        </div>
        </div>

       <div class="image-content-body">
        <div class="image-content">
            <h3 class="name">
            ${teachers[5].name}
            </h3>
            
            <div class="course-taken">
                <h5 class="course-taken-h5">
                ${teachers[5].title}
                </h5>
            </div>
            <hr class="teacher-hr">
        </div>

        <div class="teacher-content-para">
            <p class="teacher-content-paragraph">
            ${teachers[5].description} </p>
            </div>
            </div>
            </div>
            <div class="cards">
                <div class="card-image"> <div class="card-image-2  card-3">
                </div>
                </div>
            
               <div class="image-content-body">
                <div class="image-content">
                    <h3 class="name">
                    ${teachers[2].name}
                    </h3>
                    
                    <div class="course-taken">
                        <h5 class="course-taken-h5">
                        ${teachers[2].title}
                        </h5>
                    </div>
                    <hr class="teacher-hr">
                </div>
            
                <div class="teacher-content-para">
                    <p class="teacher-content-paragraph">
                    ${teachers[2].description}         </p>
                </div>
                </div>
                </div>
                
                
                <div class="cards">
                    <div class="card-image"> <div class="card-image-2  card-4">
                    </div>
                    </div>
            
                   <div class="image-content-body">
                   <div class="image-content">
                   <h3 class="name">
                   ${teachers[3].name}
                   </h3>
                   
                   <div class="course-taken">
                            <h5 class="course-taken-h5">
                            ${teachers[3].title}
                            </h5>
                        </div>
                        <hr class="teacher-hr">
                    </div>
            
                    <div class="teacher-content-para">
                        <p class="teacher-content-paragraph">
                        ${teachers[3].description}    </p>
                    </div>
                   </div>
                </div>
                </div>
                </section>

            <!---- Partners ---->

                <section class="partner-section">
    <div class="partner-content">
        <h3 class="partner-h3">
            Partner
        </h3>
        <hr class="partner-hr">

        <div class="adverts">
    <span class="font-and-content">
        <i class="fab fa-google"> </i> Google
    </span>
    <span class="font-and-content">
        <i class="fab fa-airbnb"> </i> Airbnb
    </span>
    <span class="font-and-content">
        <i class="fab fa-microsoft"> </i> Microsoft
    </span>
    <span class="font-and-content">
        <i class="fab fa-apple"> </i>Apple
    </span>
    <span class="font-and-content">
        <i class="fab fa-free-code-camp"> </i>Apple
    </span>
        </div>
    </div>
</section>
`)