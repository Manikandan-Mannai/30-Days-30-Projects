function greeting() {
  var name = document.getElementById("name").value;
  var result = document.querySelector(".result");
  var context =
    "Hai"+ name +
    "Welcome to this Page :)";
  result.innerHTML = context;
}
