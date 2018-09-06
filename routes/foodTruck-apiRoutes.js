var db = require("../models");

module.exports = function(app) {
  app.get("/api/foodTruck", function(req, res) {
    // 1. Add a join to include all of each FoodTruck's Posts
    // db.FoodTruck.findAll({}).then(function(dbFoodTruck) {
    //   res.json(dbFoodTruck);
    // });
  });

  app.get("/api/foodTruck/:id", function(req, res) {
    // 2; Add a join to include all of the FoodTruck's Posts here
    // db.FoodTruck.findOne({
    //   where: {
    //     id: req.params.id
    //   }
    // }).then(function(dbFoodTruck) {
    //   res.json(dbFoodTruck);
    // });
  });

  app.post("/api/foodTruck", function(req, res) {
    db.FoodTruck.create(req.body).then(function(dbFoodTruck) {
      res.json(dbFoodTruck);
    });
  });

  //   app.delete("/api/foodTruck/:id", function(req, res) {
  //     db.FoodTruck.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(dbFoodTruck) {
  //       res.json(dbFoodTruck);
  //     });
  //   });
};
