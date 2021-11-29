const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart'
  }
);

module.exports = Cart;
