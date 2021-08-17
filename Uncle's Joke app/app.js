const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const btn = document.querySelector(".btn");
const imgdiv = document.querySelector(".img-div");
const url = "https://official-joke-api.appspot.com/random_joke";

btn.addEventListener("click", () => {
  fetch(url)
    .then((res) => {
      if (res.status != 200) {
        throw Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      imgdiv.remove();
      console.log(data);
      question.textContent = data.setup;
      answer.textContent = data.punchline;
    })
    .catch((error) => {
      alert(" Net ah ON pannuga BRO!!");
    });
});
