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
    res.render("index");
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

  app.get("/index", function(req, res) {
    res.render("index");
  });

  // Tessa added this route to test the reviews page
  app.get("/review", function(req, res) {
    res.render("review");
  });
};
