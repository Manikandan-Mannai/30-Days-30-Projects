const span_1 = document.querySelector(".span_1");
const body = document.querySelector(".body")

span_1.addEventListener("click",()=>{
    span_1.classList.toggle("move");

    if (span_1.classList.contains("move")) {
        body.classList.add("dark_bg")
    }else{
        body.classList.remove("dark_bg")
    }
})
