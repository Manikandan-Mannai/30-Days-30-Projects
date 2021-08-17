const plus_btn = document.getElementById("plus_btn");
const faq_answer = document.querySelector(".faq_answer");

plus_btn.addEventListener("click",()=>{
    faq_answer.classList.toggle("show_text")
})