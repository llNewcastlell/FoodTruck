var db = require("../models");

module.exports = function(app) {
  app.get("/api/foodTruck", function(req, res) {
    db.FoodTruck.findAll({}).then(function(FoodTruck) {
      res.json(FoodTruck);
      console.log(FoodTruck);
    });
  });

  app.get("/api/foodTruck/:id", function(req, res) {
    // 2; Add a join to include all of the FoodTruck's Posts here
    // db.FoodTruck.findOne({
    //   where: {
    //     id: req.params.id
    //   }
    // }).then(function(FoodTruck) {
    //   res.json(FoodTruck);
    // });
  });

  app.post("/api/foodTruck", function(req, res) {
    db.FoodTruck.create(req.body).then(function(FoodTruck) {
      res.json(FoodTruck);
    });
  });

  //   app.delete("/api/foodTruck/:id", function(req, res) {
  //     db.FoodTruck.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(FoodTruck) {
  //       res.json(FoodTruck);
  //     });
  //   });
};
