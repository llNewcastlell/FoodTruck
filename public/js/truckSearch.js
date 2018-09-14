//Once the document is ready run the stuff
$(document).ready(function() {
  //global variables to use in all functions
  var lat;
  var long;

  //
  //on click function for foodtype dropdown
  $(".foodTypeBtn").on("click", function() {
    console.log("What was clicked " + this.id);
    var search = this.id;
    console.log("search function for " + search);
    return $.ajax({
      url: "/api/foodTruck/" + search,
      type: "GET"
    }).then(function(foodTruckdata) {
      //console.log("did I get it?");
      console.warn(foodTruckdata);
      pinDrop(foodTruckdata);
    });
  });

  //Function to create pins

  var pinDrop = function(foodTruckdata) {
    console.log("=======: ", foodTruckdata);

    var baseCoords = [39.7452, 104.9922];
    var mymap = L.map("mapid").setView(baseCoords, 13);
    //loop for
    for (var i = 0; i < foodTruckdata.length; i++) {
      lat = foodTruckdata[i].latitude;
      long = foodTruckdata[i].longitude;
      console.log(lat);
      console.log(long);
      var marker = L.marker([lat, long], {
        draggable: true
      }).addTo(mymap);
      marker
        .bindPopup(
          "<b>" +
            foodTruckdata[i].name +
            "</b><br><a href='" +
            foodTruckdata[i].menuLink +
            "'>Menu</a><br>" +
            foodTruckdata[i].price +
            "</p>"
        )
        .openPopup();

      var popup = L.popup();
    }

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
    }

    mymap.on("click", onMapClick);

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        minZoom: 13,
        id: "mapbox.emerald",
        accessToken:
          "pk.eyJ1IjoibmNvb3BlcnciLCJhIjoiY2pscHYybHlqMjkybDNrb3NuODQ3enhkdyJ9.PYpALCFWSGmaKkhN35TpwA"
      }
    ).addTo(mymap);

    var myLoc = mymap.locate({
      setView: true,
      maxZoom: 16,
      enableHighAccuracy: true
    });

    var truckCustomMarker = L.icon({
      iconUrl: "./public/images/marker.png",
      iconSize: [34, 44],
      iconAnchor: [20, 36],
      popupAnchor: [-4, -36],
      shadowUrl: "",
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });
  };
  //pinDrop();

  // refreshfoodTrucks gets new foodTrucks from the db and repopulates the list
  // function getFoodTrucks(foodType) {
  //   return $.ajax({
  //     url: "/api/foodTruck/" + foodType,
  //     type: "GET"
  //   }).then(function(data) {
  //     var $foodTrucks = data.map(function(foodTruck) {
  //       var $a = $("<a>")
  //         .text(foodTruck.text)
  //         .attr("href", "/foodTruck/" + foodTruck.id);
  //       var $li = $("<li>")
  //         .attr({
  //           class: "list-group-item",
  //           "data-id": foodTruck.id
  //         })
  //         .append($a);
  //       var $button = $("<button>")
  //         .addClass("btn btn-danger float-right delete")
  //         .text("ｘ");
  //       $li.append($button);
  //       return $li;
  //     });
  //     $foodTruckList.empty();
  //     $foodTruckList.append($foodTrucks);
  //   });
  // }
});
