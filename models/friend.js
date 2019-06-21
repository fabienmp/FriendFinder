'use strict';
module.exports = (sequelize, DataTypes) => {
  const friend = sequelize.define('friend', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    scores: DataTypes.STRING
  }, {});
  friend.associate = function(models) {
    // associations can be defined here
  };
  return friend;
};