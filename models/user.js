module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("User", {
    name: Sequelize.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  const userSeed = 
    { name: "Test User1"
    }; 

    User.create(userSeed)
  return User;
};

// module.exports = function(sequelize, Sequelize) {
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
