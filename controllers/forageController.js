var express = require("express");

var router = express.Router();

var foodtruck = require("../models/foodTruck.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  foodtruck.all(function(data) {
    var hbsObject = {
      foodtruck: data
    };
    console.log("********" + hbsObject);
    res.render("index", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
