const btn = document.querySelector(".btn");
const pokemon_card = document.querySelector(".pokemon_card");
const h3 = document.querySelector(".pokemon_card > h3");
const initial = document.querySelector("initial");

btn.addEventListener("click", () => {
  h3.classList.remove("initial");

  const url = "https://pokeapi.co/api/v2";
  const type = "pokemon";
  var id = Math.floor(Math.random() * 898) + 1;
  const APIURL = `${url}/${type}/${id}`;

  fetch(APIURL)
    .then((res) => res.json())
    .then((data) => {
      let pokemonType = data.types[0].type.name;
      if (data.sprites.front_default) {
        var html = `<h2>${data.name}</h2>
        <h3>#${id}</h3>
        <img
          src="${data.sprites.front_default}"
          alt="${data.name}"
        />
        <h3>Type: ${pokemonType}</h3>`;
      }
      pokemon_card.innerHTML = html;
    });
});
