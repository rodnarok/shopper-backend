const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Pack = db.define("Pack", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    require: true,
  },
  pack_id: {
    type: DataTypes.BIGINT,
    require: true,
  },
  product_id: {
    type: DataTypes.BIGINT,
    require: true,
  },
  qty: {
    type: DataTypes.BIGINT,
    require: true,
  },
});

module.exports = Pack;
