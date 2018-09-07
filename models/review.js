module.exports = function(sequelize, Sequelize) {
  var Review = sequelize.define("Review", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Review.associate = function(models) {
    // We're saying that a Review should belong to an Author
    // A Review can't be created without an Author due to the foreign key constraint
    Review.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Review.belongsTo(models.FoodTruck, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};
