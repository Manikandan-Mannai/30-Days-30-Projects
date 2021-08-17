const images = [
  {
    image:
      "https://collider.com/wp-content/uploads/avengers-character-poster-banner.jpeg",
  },
  {
    image:
      "https://1847884116.rsc.cdn77.org/english/gallery/movies/venom/main1.jpg",
  },
  {
    image:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/avengers-movie-banner-mark-ruffalo-robert-downey-jr.jpg?q=50&fit=crop&w=1276&dpr=1.5",
  },
  {
    image:
      "https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg",
  },
  {
    image: "https://pbs.twimg.com/media/DZ9W0KGVAAAjbiq.jpg",
  },
];
var carosele_image = document.querySelector(".carosele_image");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

let Count = 0;

window.addEventListener("DOMContentLoaded", () => {
  var items = images[Count];
  carosele_image.src = items.image;
});

next.addEventListener("click", () => {
  ++Count;
  if (Count > images.length - 1) {
    Count = 0;
  }
  display(Count);
});

prev.addEventListener("click", () => {
  --Count;
  if (Count < 0) {
    Count = images.length - 1;
  }
  display(Count);
});

function display(data) {
  var items = images[data];
  carosele_image.src = items.image;
}
