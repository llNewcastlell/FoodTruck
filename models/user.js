module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };
  return User;
};

// module.exports = function(sequelize, DataTypes) {
// var User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });

// // force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

// User.associate = function(models) {
//   User.hasMany(models.Review, {
//     onDelete: "cascade"
//   });
// }};
