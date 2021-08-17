const reviews = [
  {
    id: 1,
    name: "Arun",
    job: "Blow job",
    image:
      "https://i1.sndcdn.com/artworks-GanG2karyr1tGfr6-k48CUQ-t500x500.jpg",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio facilis quisquamsoluta officiis nesciunt magni asperiores",
  },
  {
    id: 2,
    name: "Mahes",
    job: "scientist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    review:
      "If you want to generate more positive reviews, it helps to know what an excellent review really looks like. You might be thinking, ",
  },
  {
    id: 3,
    name: "Ravi",
    job: "App developer",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    review:
      "There is more to it than a five-star rating. While the exact characteristics of good reviews vary by industry, there are certain fu",
  },
  {
    id: 4,
    name: "Dhoni",
    job: "Cricketer",
    image:
      "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg",
    review:
      "Which review is likely to influence someone with an intense pizza craving? A five-star rating and “good pizza” is not bad, but it d",
  },
  {
    id: 5,
    name: "Mark Mama",
    job: "C.E.O FaceBook",
    image:
      "https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg",
    review:
      "One less-heralded benefit of reviews is the feedback they provide you with. Ideally, a review also outlines areas of possible impr",
  },
];

const leftbtn = document.querySelector(".left-btn");
const rightbtn = document.querySelector(".rigth-btn");
const randomBtn = document.querySelector(".randomBtn");

const img = document.querySelector(".person-img");
const author = document.querySelector(".name");
const job = document.querySelector(".job");
const review = document.querySelector(".review");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  var item = reviews[currentItem];
  img.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  review.textContent = item.review;
});

function updateDOM(update) {
  var item = reviews[update];
  img.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  review.textContent = item.review;
}

rightbtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  updateDOM(currentItem);
});

leftbtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  updateDOM(currentItem);
});
