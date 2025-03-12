const {DataTypes} = require('sequelize')
const sequelize = require("../config/db");


const EncuestaCalificacion = sequelize.define(
  "EncuestaCalificacion",
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,  // ✅ Asegura que el ID se genera automáticamente
      },
    nombre_cliente: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    asesor: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pregunta1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1, max: 5 },
    },
    pregunta2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1, max: 5 },
    },
    pregunta3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1, max: 5 },
    },
    pregunta4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1, max: 5 },
    },
    pregunta5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1, max: 5 },
    },
    pregunta6: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1, max: 5 },
    },
    pregunta7: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1, max: 5 },
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "encuesta_calificacion",
    timestamps: false,
  }
);

module.exports = EncuestaCalificacion;
