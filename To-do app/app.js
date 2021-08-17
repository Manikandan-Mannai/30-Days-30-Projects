// !importanr msg
alert("1.Double click to remove the task");

// Initialisation
var inputfield = document.querySelector(".todo-input");
var paragrapcontainer = document.getElementById("paragrap-container");
var button = document.getElementById("btn");
var p = document.getElementsByTagName("p");

// EventListener
button.addEventListener("click", () => {
  // CreateElement
  var div = document.createElement("div");
  var task = document.createElement("p");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // ClassList
  task.classList.add("task-style");
  task.innerText = inputfield.value;
  div.classList.add("flex");

  // Append
  div.append(task);
  div.append(checkbox);
  paragrapcontainer.append(div);
  inputfield.value = "";

  // CheckBox
  checkbox.addEventListener("click", () => {
    task.classList.toggle("done");
  });
  task.addEventListener("dblclick", () => {
    task.remove();
    checkbox.remove();
  });
});
