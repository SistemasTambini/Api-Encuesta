const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Areas = sequelize.define(
  "Areas",
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
  },
  {
    tableName: "areas",
    timestamps: false,
  }
);

module.exports = Areas;
