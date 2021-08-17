function getclockValue() {
  const clock_container = document.querySelector(".clock_container");

  const time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var html = ` ${h} : ${m} : ${s} ${session}`;

  clock_container.textContent = html;

  setTimeout(getclockValue, 100);
}

getclockValue();
