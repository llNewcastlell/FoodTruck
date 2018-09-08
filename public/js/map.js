// var baseCoords = [39.7392, 104.9903];

// var mymap = L.map("mapid").setView(baseCoords, 16);

// // $(".mainDiv").addClass("animated zoomIn");

// L.tileLayer(
//   "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",

//   {
//     attribution:
//     'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     minZoom: 13,
//     id: "mapbox.emerald",
//     accessToken:
//       "pk.eyJ1IjoibmNvb3BlcnciLCJhIjoiY2pscHYybHlqMjkybDNrb3NuODQ3enhkdyJ9.PYpALCFWSGmaKkhN35TpwA"
//   }
// ).addTo(mymap);

// //Show my current location
// var myLoc = mymap.locate({
//   setView: true,
//   maxZoom: 16,
//   enableHighAccuracy: true
// });

// function onLocationFound(e) {
//   var currentMarker = L.marker(e.lating, {
//     icon: currentLocIcon
//   });
//   currentMarker.addTo(mymap);
// }
// function onLocationError(e) {
//   alert(e.message);
// }
// mymap.on("locationerror", onLocationError);

// $(function() {
//   mymap.setView(baseCoords, 15);
//   $.get("/api/trucks").then(function(data) {

//   });
// });
