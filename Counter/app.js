const decrease = document.getElementById("Decrease");
const increase = document.getElementById("Increase");
const reset = document.getElementById("Reset");
const digit = document.getElementById("digit");

let count = 0;

decrease.addEventListener('click',()=>{
    --count;
    digit.style.color="red";
    digit.textContent=count;
});

increase.addEventListener("click", () => {
  ++count;
  digit.style.color = "green";
  digit.textContent = count;
});

reset.addEventListener("click", () => {
  count=0;
  digit.style.color = "white";
  digit.textContent = count;
});