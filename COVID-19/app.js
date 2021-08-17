// Initiazlizing
const infectedcount = document.querySelector(".infected-count");
const Recoveredcount = document.querySelector(".Recovered-count");
const Deathscount = document.querySelector(".Deaths-count");
const btn = document.querySelector(".btn");

// API
const url = "https://covid19.mathdro.id/api";

// Fetching
window.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then((res) => {
      if (res.status != 200) {
        throw Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      var con = data.confirmed.value;
      var rec = data.recovered.value;
      var dea = data.deaths.value;
      formatNumber(con, rec, dea);
    })
    .catch((error) => {
      alert(" Net ah ON pannuda Venna ");
    });
  calender();
});

// Button
btn.addEventListener("click", () => {
  window.location.reload(true); //newly Learned
});

// Date & Days
function calender() {
  var date = new Date();
  var days = date.getDay();
  var months = date.getMonth();
  var dates = date.getDate();
  var years = date.getFullYear();

  // Newly Learned
  var weeks = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];
  var Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  dayses1.textContent =
    weeks[days] + " " + Months[months] + " " + dates + " " + years;
  dayses2.textContent =
    weeks[days] + " " + Months[months] + " " + dates + " " + years;
  dayses3.textContent =
    weeks[days] + " " + Months[months] + " " + dates + " " + years;
}

function formatNumber(a, b, c) {
  infectedcount.textContent = a.toLocaleString("en-IN");
  Recoveredcount.textContent = b.toLocaleString("en-IN");
  Deathscount.textContent = c.toLocaleString("en-IN");
}
