require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static("public"));


// Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/foodTruck-apiRoutes")(app);
require("./routes/review-apiRoutes")(app);
require("./routes/user-apiRoutes")(app);

// Added by Tessa -- Not sure if we should do this the way shown above or the way I have it below...
// Import routes and give the server access to them.
var routes = require("./controllers/forageController.js");

app.use(routes);
// End of added portion

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening: Visit http://localhost:" + PORT);
  });
});

module.exports = app;
