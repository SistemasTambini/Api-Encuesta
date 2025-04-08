const EncuestaCalificacion = require("../models/encuesta.model");
const { Op } = require("sequelize");
const Areas = require("../models/areas.model");
const Usuario = require("../models/usuario.model");

// Obtener todas las calificaciones
const obtenerCalificaciones = async (req, res) => {
  try {
    const calificaciones = await EncuestaCalificacion.findAll();
    res.json(calificaciones);
  } catch (error) {
    console.error("🔴 Error al obtener las calificaciones:", error);
    res.status(500).json({ error: "Error al obtener las calificaciones" });
  }
};

const obtenerCalificacionesPorRangoFechas = async (req, res) => {
  try {
    const { fecha_inicio, fecha_fin } = req.query;

    if (!fecha_inicio || !fecha_fin) {
      return res.status(400).json({ error: "Se requieren fecha_inicio y fecha_fin" });
    }

    const calificaciones = await EncuestaCalificacion.findAll({
      where: {
        fecha_creacion: {
          [Op.between]: [new Date(fecha_inicio), new Date(fecha_fin)],
        },
      },
    });

    res.json(calificaciones);
  } catch (error) {
    console.error("🔴 Error al obtener calificaciones por rango:", error);
    res.status(500).json({ error: "Error al obtener las calificaciones por rango" });
  }
};

// Crear una nueva calificación
const crearCalificacion = async (req, res) => {
  try {
    const { nombre_cliente, area, asesor, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7,pregunta8 } = req.body;

    const nuevaCalificacion = await EncuestaCalificacion.create({
      nombre_cliente,
      area,
      asesor,
      pregunta1,
      pregunta2,
      pregunta3,
      pregunta4,
      pregunta5,
      pregunta6,
      pregunta7,
      pregunta8,
    });

    res.status(201).json(nuevaCalificacion);
  } catch (error) {
    console.error("🔴 Error al crear la calificación:", error);
    res.status(500).json({ error: "Error al crear la calificación" });
  }
};

// Obtener todas las áreas
const obtenerAreas = async (req, res) => {
  try {
    const areas = await Areas.findAll();
    res.json(areas);
  } catch (error) {
    console.error("🔴 Error al obtener las áreas:", error);
    res.status(500).json({ error: "Error al obtener las áreas" });
  }
};

// Obtener usuarios por área
const obtenerUsuariosPorArea = async (req, res) => {
  try {
    const { area } = req.params;

    if (![1, 2].includes(Number(area))) {
      return res.status(400).json({ error: "Área no válida. Debe ser 1 o 2." });
    }

    const usuarios = await Usuario.findAll({
      where: { area: area },
    });

    res.json(usuarios);
  } catch (error) {
    console.error("🔴 Error al obtener usuarios por área:", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

module.exports = { obtenerCalificaciones, crearCalificacion, obtenerAreas, obtenerUsuariosPorArea, obtenerCalificacionesPorRangoFechas };
