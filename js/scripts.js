// Business Logic
function Place(location, landmarks, weather) {
  this.location = location,
  this.landmarks = landmarks,
  this.weather = weather
};

Place.prototype.placeInfo = function () {
  return this.location + " " + this.landmarks +  " " + this.weather;
};

var seattle = new Place("Washington", "Space Needle", "Rainy");
var lasvegas = new Place("Nevada", "Casinos", ["Hot", "Dry"]);
var boulder = new Place("Colorado", "Hippies", ["Hot", "Rainy", "Thunder"]);
var space = new Place("Universe", "Uranus", "All kinda shit");

// User Interface
$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();
    var inputLocation = $("input#location").val();
    var inputLandmarks = $("input#landmarks").val();
    var inputWeather = $("input#weather").val();

    var newPlace = new Place(inputLocation, inputLandmarks, inputWeather);
    console.log(newPlace);

    $("ul#placeLocations").append("<li>" + newPlace.placeInfo() + "</li>")
  });

  $("#seattle").click(function(event) {
    event.preventDefault();
    $("#seattle").html("Location: " + seattle.location + "<br/> Landmarks: " + seattle.landmarks + "<br/> Weather: " + seattle.weather);
  });
  $("#lasVegas").click(function(event) {
    event.preventDefault();
    $("#lasVegas").html("Location: " + lasvegas.location + "<br/> Landmarks: " + lasvegas.landmarks + "<br/> Weather: " + lasvegas.weather);
  });
  $("#boulder").click(function(event) {
    event.preventDefault();
    $("#boulder").html("Location: " + boulder.location + "<br/> Landmarks: " + boulder.landmarks + "<br/> Weather: " + boulder.weather);
  });
  $("#space").click(function(event) {
    event.preventDefault();
    $("#space").html("Location: " + space.location + "<br/> Landmarks: " + space.landmarks + "<br/> Weather: " + space.weather);
  });
});
