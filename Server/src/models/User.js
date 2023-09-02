const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         autoIncrement: true,
      },
      email: {
         type: DataTypes.STRING(254),
         allowNull: false,
         isEmail: true,
         unique: true,
         
      },
      password: {
         type: DataTypes.STRING(254),
         allowNull: false,
      }
   }, { timestamps: false });
};
