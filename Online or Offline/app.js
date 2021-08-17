
const toaster_div = document.querySelector(".toaster_div");
const toaster_div_offline = document.getElementById("toaster_div_offline");

window.addEventListener("DOMContentLoaded", () => {checking();});

function checking() {
  if (navigator.onLine) {
    toaster_div.style.display = "block";
  }
  if (!navigator.onLine) {
    toaster_div_offline.style.display = "block";
  }
}
