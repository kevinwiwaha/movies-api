'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
  }, {});
  Movie.associate = function(models) {
    Movie.belongsTo(models.User,{as:'movie',foreignKey:'user_id'})
  };
  return Movie;
};