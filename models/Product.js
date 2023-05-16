const { DataTypes } = require("sequelize");

const db = require("../db/conn");

// User
const Pack = require("./Pack");

const Product = db.define(
  "Product",
  {
    code: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      require: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    cost_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      require: true,
    },
    sales_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      require: true,
    },
  },
  { timestamps: false }
);

module.exports = Product;
