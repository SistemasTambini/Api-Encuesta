const express = require("express");
const {
  obtenerCalificaciones,
  obtenerCalificacionesPorRangoFechas,
  crearCalificacion,
  obtenerAreas,
  obtenerUsuariosPorArea,
} = require("../controllers/encuesta.controller");
const validateCalificacion = require("../middlewares/validateCalificacion");

const router = express.Router();

// 📍 Primero rutas específicas
router.get("/filtrar", obtenerCalificacionesPorRangoFechas);
router.get("/", obtenerCalificaciones);
router.post("/", validateCalificacion, crearCalificacion);

// 📍 Luego rutas específicas para áreas
router.get("/areas", obtenerAreas);

// 📍 Al final: ruta dinámica
router.get("/:area", obtenerUsuariosPorArea); // ← esta debe ir al final

module.exports = router;
