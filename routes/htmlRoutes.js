var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.FoodTruck.findAll({}).then(function(dbfoodTrucks) {
      res.render("index", {
        msg: "Welcome!",
        foodTrucks: dbfoodTrucks
      });
    });
  });

  // Load foodTruck page and pass in an foodTruck by id
  app.get("/foodTruck/:id", function(req, res) {
    db.foodTruck
      .findOne({ where: { id: req.params.id } })
      .then(function(dbfoodTruck) {
        res.render("foodTruck", {
          foodTruck: dbfoodTruck
        });
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
