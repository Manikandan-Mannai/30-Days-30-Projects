const hambergar = document.getElementById("hambergar_icon");
const remove = document.getElementById("remove");
var aside = document.getElementById("aside");

hambergar.addEventListener("click",()=>{
    aside.classList.add("left");
});

remove.addEventListener("click",()=>{
    aside.classList.remove("left");
})