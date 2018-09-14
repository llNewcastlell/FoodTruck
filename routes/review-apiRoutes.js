// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the reviews
  app.get("/api/reviews", function(req, res) {
    var query = {};
    if (req.query.username) {
      query.Username = req.query.username;
    } else if (req.query.foodTruck_id) {
      query.FoodTruckId = req.query.foodTruck_id;
    }
    // 1. Add a join here to include all of the Authors to these reviews
    db.Review.findAll({
      where: query
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // Get route for retrieving a single Review
  app.get("/api/reviews/:id", function(req, res) {
    // 2. Add a join here to include the Author who wrote the Review
    db.Review.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbReview) {
      console.log(dbReview);
      res.json(dbReview);
    });
  });

  // Review route for saving a new Review
  //   app.Review("/api/reviews", function(req, res) {
  //     db.Review.create(req.body).then(function(dbReview) {
  //       res.json(dbReview);
  //     });
  //   });

  // DELETE route for deleting reviews
  app.delete("/api/reviews/:id", function(req, res) {
    db.Review.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // PUT route for updating reviews
  app.put("/api/reviews", function(req, res) {
    db.Review.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // POST route for updating reviews
  app.post("/api/reviews", function(req, res) {
    db.Review.create(req.body, {
      where: {
        title: req.body.title,
        body: req.body.body,
        Username: req.body.Username,
        FoodTruckId: req.body.FoodTruckId,
      }
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });
};
