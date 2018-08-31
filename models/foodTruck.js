module.exports = function(sequelize, DataTypes) {
  var FoodTruck = sequelize.define("FoodTruck", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  FoodTruck.associate = function(models) {
    FoodTruck.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return FoodTruck;
};
