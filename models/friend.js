'use strict';
module.exports = (sequelize, DataTypes) => {
  const friend = sequelize.define('friend', {
    name: DataTypes.STRING,                          
    scores: DataTypes.STRING,
    imageLink: DataTypes.STRING
  }, {});
  friend.associate = function(models) {
    // associations can be defined here
  };
  return friend;
};