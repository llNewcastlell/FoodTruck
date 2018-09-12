//Once the document is ready run the stuff
$(document).ready(function () {
  //global variables to use in all functions
  var searchRows = [];
  var lat;
  var long;

  //
  //on click function for foodtype dropdown
  $(".foodTypeBtn").on("click", function () {
    console.log("What was clicked " + this.id);
    var search = this.id;
    console.log("search function for " + search);
    return $.ajax({
      url: "/api/foodTruck/" + search,
      type: "GET"
    }).then(function (foodTruckdata) {
      //console.log("did I get it?");
      var results = JSON.stringify(foodTruckdata);
      console.log(results);

      //with results loop through
      for (var i = 0; i < foodTruckdata.length; i++) {
        searchRows.push(createFtRow(foodTruckdata[i]));
        //searchRows.push(foodTruckdata[i]);
        truckName = foodTruckdata[i].name;
        // lat = foodTruckdata[i].latitude;
        // long = foodTruckdata[i].longitude;
        menu = "<a href='" + foodTruckdata[i].menu + "/>";
        price = foodTruckdata[i].price;

        pinDrop(foodTruckdata[i]);
      }
      //createFtRow();
      console.log("var searchRows " + JSON.stringify(searchRows));
      // var info = JSON.stringify(searchRows);

      //console.log(foodTruckdata);
      console.log("inside truck search");
    });
  });

  //Function to print foodtrucks in a row
  function createFtRow(foodTruckData) {
    //for (i = 0; i < searchRows.length; i++) {
    var newTr = $("<tr>");
    //newTr.data("name", foodTruckData);
    newTr.append("<td>" + foodTruckData.name + "</td>");
    //newTr.append("<td>" + foodTruckData.foodType + "</td>");
    //newTr.append("<td>" + foodTruckData.description + "</td>");
    //newTr.append("<td><a href='" + foodTruckData.menuLink + "'>Menu</a></td>");
    newTr.append("<td>" + foodTruckData.price + "</td>");
    //newTr.append("<td>" + foodTruckData.phone + "</td>");
    console.log(newTr);
    $(".truckrows").html(newTr);
    return newTr;
  }

  var pinDrop = function (foodTruckdata) {
    console.log("=======: ", foodTruckdata);
    var baseCoords = [39.7452, 104.9922];
    var mymap = L.map("mapid").setView(baseCoords, 13);

    for (var i = 0; i < foodTruckdata.length; i++) {
      console.log("*********");
      lat = foodTruckdata[i].latitude;
      long = foodTruckdata[i].longitude;
      var marker = L.marker([lat, long], {
        draggable: true
      }).addTo(mymap);
      marker
        .bindPopup(
          "<b>" +
          foodTruckdata[i].name +
          "</b> <p>" +
          foodTruckdata[i].menuLink +
          "<br>" +
          foodTruckdata[i].price +
          "<br>" +

          "</p>"
        )
        .openPopup();

      var popup = L.popup();
    }



    /*
    If you click on the map, it will provide you with the long.
    */
    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
    }

    mymap.on("click", onMapClick);

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        minZoom: 13,
        id: "mapbox.emerald",
        accessToken: "pk.eyJ1IjoibmNvb3BlcnciLCJhIjoiY2pscHYybHlqMjkybDNrb3NuODQ3enhkdyJ9.PYpALCFWSGmaKkhN35TpwA"
      }
    ).addTo(mymap);

    var myLoc = mymap.locate({
      setView: true,
      maxZoom: 16,
      enableHighAccuracy: true
    });

    var truckCustomMaker = L.icon({
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