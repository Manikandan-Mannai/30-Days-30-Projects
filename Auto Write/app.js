var text = document.getElementById("text");
var autoTxt = "Hello World I am Manikandan";
var idx = 1;

setInterval(autoWrite, 200);

function autoWrite() {
  text.innerText = autoTxt.slice(0, idx);
  idx++;

  // To auto Text as Infinite Loop
  // if(idx > autoTxt.length){
  //   idx = 1
  // }
}
