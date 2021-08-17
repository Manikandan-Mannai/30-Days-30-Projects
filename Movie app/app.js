const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const btn = document.querySelector(".btn");
const input = document.getElementById("input");

const main = document.getElementById("main");

getMovies(APIURL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  displayMovies(data.results);
}

function displayMovies(movies) {
  main.innerHTML = "";

  movies.forEach((element) => {
    var div = document.createElement("div");
    div.classList.add("movie-box");
    
    if (element.poster_path) {
      div.innerHTML = `
            <img src="${IMGPATH + element.poster_path}" alt="${element.title}">
        <div class="movie-details">
            <h3>${element.title}</h3>
            <span>${element.vote_average}</span>
        </div>
        <div class="overview">
                <h3>Overview:</h3>
                ${element.overview}
            </div>
        `;
      main.append(div);
    }
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const searchedValue = input.value.trim();
  console.log(searchedValue);

  if (searchedValue) {
    getMovies(SEARCHAPI + searchedValue);

    input.value = "";
  }
});
