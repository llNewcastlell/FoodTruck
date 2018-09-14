module.exports = function(sequelize, Sequelize) {
  var FoodTruck = sequelize.define("FoodTruck", {
    name: Sequelize.STRING,
    imgLink: Sequelize.STRING,
    foodType: Sequelize.STRING,
    description: Sequelize.STRING,
    menuLink: Sequelize.STRING,
    price: Sequelize.STRING,
    phone: Sequelize.STRING,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING
  });

  FoodTruck.associate = function(models) {
    FoodTruck.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };


 

  
  // FoodTruck.bulkCreate(truckSeed);

 
  return FoodTruck;
};
