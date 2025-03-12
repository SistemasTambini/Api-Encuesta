const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Area = sequelize.define(
  "Area",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
  },
  {
    tableName: "area",
    timestamps: false,
  }
);

module.exports = Area;
