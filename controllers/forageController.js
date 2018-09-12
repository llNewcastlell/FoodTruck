var express = require("express");

var router = express.Router();

var foodtruck = require("../models/foodTruck.js");

var review = require("../models/review.js");
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

router.post("/review", function(req, res) {
  // review.create(req.body);
  console.log(req.body);
});

// Export routes for server.js to use.
module.exports = router;
