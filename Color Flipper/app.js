// Initilization
const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");
const display = document.querySelector(".display");

// Array of Colors
const colors = [
  "red",
  "green",
  "black",
  "aliceblue",
  "lightcoral",
  "firebrick",
  "forestgreen",
  "rebeccapurple",
  "blue",
  "chocolate",
  "slateblue",
  "brown",
  "navy",
  "khaki",
  "lightsalmon",
  "indigo",
  "yellowgreen",
];

// AddEventListener
btn.addEventListener("click", () => {
  display.style.display = "flex";
  var text = "background-color:";
  var randomNumber = getRandomNumber();
  h1.append(colors[randomNumber]);
  document.body.style.backgroundColor = colors[randomNumber];
  h1.textContent = text + colors[randomNumber];
});

// GetRandomNumber
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
