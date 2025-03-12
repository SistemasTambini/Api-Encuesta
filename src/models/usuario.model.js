const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Area = require("./area.model");

const Usuario = sequelize.define(
  "Usuario",
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
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    documento: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    id_area: {
      type: DataTypes.INTEGER,
      references: {
        model: Area,
        key: "id",
      },
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fecha_modificacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    jefe: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "usuario",
    timestamps: false,
  }
);

// Relación con `Area`
Usuario.belongsTo(Area, { foreignKey: "id_area" });

module.exports = Usuario;
