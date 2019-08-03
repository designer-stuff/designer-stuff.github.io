// Animation on Scroll initialization
AOS.init();

// Smooth Scrolling initialization
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  offset: 100
});

// Maps
function initMap() {
  let location = {
    lat: 15.5202268,
    lng: 73.767442
  };

  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location
  });

  let marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

// submit comment
let submit = document.getElementById("submit");
let name = document.getElementById("name");
let comment = document.getElementById("comment");

submit.addEventListener("click", e => {
  if (name.value.length === 0 || comment.value.length === 0)
    alert("Please fill the required fields");
  else
    alert("Feedback submitted successfully. Thanks for your valuable comment");

  name.value = "";
  comment.value = "";
});

// card animation
let slideIndex = 0;
showSlides();

function showSlides() {
  let cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > cards.length) {
    slideIndex = 1;
  }
  cards[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}
