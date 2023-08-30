const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey : true ,
         allowNull: false,
      },
      name: {
         type: DataTypes.STRING(250),
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull: false,
      },
      especies: {
         type: DataTypes.STRING(250),
         allowNull: false,
      },
      gender: {
         type: DataTypes.ENUM('Male', 'Female', 'Genderless', 'unknown'),
         allowNull: false,
      },
      origin:{
         type:DataTypes.STRING(250),
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING(250),
         allowNull: false,

      },

   }, { timestamps: false });
};
