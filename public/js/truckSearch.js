var express = require("express");
// var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");

// var db = require("./models");

var app = express();

$(document).ready(function() {
  $(".foodTypeBtn").on("click", function() {
    console.log("What was clicked " + this.id);
    var search = this.id;
    truckSearch(search);
  });

  function truckSearch() {
    app.get("api/foodTrucks/:foodTruck", function(req, res) {
      console.log("I'm searching " + search);
      console.log(req, res);
    });
  }
});
