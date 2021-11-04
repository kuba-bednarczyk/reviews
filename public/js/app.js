// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// select buttons 
const prevBtn = document.querySelector('.buttons__prev');
const nextBtn = document.querySelector('.buttons__next');
const randomBtn = document.querySelector('.random-btn');

//elements
const img = document.querySelector('.reviews__img img');
const author = document.querySelector('.reviews__name');
const job = document.querySelector('.reviews__job');
const desc = document.querySelector('.reviews__desc');

// set starting item (id of review)
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
});

// show person based on item (reviews id)
function showPerson(personNum){
    const item = reviews[personNum];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    desc.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function(){ 
  currentItem >= reviews.length - 1 ? currentItem = 0 : currentItem++;
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener('click', function(){ 
  currentItem <= 0 ? currentItem = reviews.length - 1 : currentItem--;
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
})