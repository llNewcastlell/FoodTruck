var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

    // db.FOODTRUCKSAMPLE.findAll({}).then(function(dbfoodTrucks) {

    //   res.render("index", {
    //     msg: "Welcome!",
    //     foodTrucks: dbfoodTrucks
    //   });
    // });
    res.render("search");


  });

  // Load foodTruck page and pass in an foodTruck by id
  // app.get("/foodTruck/:id", function(req, res) {
  //   db.FOODTRUCKSAMPLE.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(FOODTRUCKSAMPLE) {
  //     res.render("search", {
  //       foodTruck: FOODTRUCKSAMPLE
  //     });
  //   });
  // });

  app.get("/search", function(req, res) {
    res.render("search");
    console.log("search, food truck page");
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
