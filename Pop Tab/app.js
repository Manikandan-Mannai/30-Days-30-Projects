const exit = document.getElementById("exit");
const pop_btn = document.querySelector(".pop_btn");
var pop_box = document.getElementById("pop_box");

exit.addEventListener("click",()=>{
    pop_box.style.display = "none";
})

pop_btn.addEventListener("click", () => {
    pop_box.style.display="flex";
});
