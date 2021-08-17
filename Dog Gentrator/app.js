const button = document.querySelector(".btn");
const img = document.querySelector(".img");
const url = "https://dog.ceo/api/breeds/image/random";
const XHR = new XMLHttpRequest();

button.addEventListener("click", () => {
  XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
      const data = JSON.parse(XHR.responseText);
      console.log(data);
      img.src = data.message;
    }
  };
  XHR.open("GET", url);
  XHR.send();
});
