// Animation on Scroll initialization
AOS.init();

// Smooth Scrolling initialization
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  offset: 150
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
