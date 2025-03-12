const express = require("express");
const { obtenerCalificaciones, crearCalificacion, obtenerAreas, obtenerUsuariosPorArea } = require("../controllers/encuesta.controller");
const validateCalificacion = require("../middlewares/validateCalificacion");

const router = express.Router();

// Rutas para encuesta_calificacion
router.get("/", obtenerCalificaciones);
router.post("/", validateCalificacion, crearCalificacion);

// Rutas para áreas
router.get("/areas", obtenerAreas);

// Rutas para usuarios por área
router.get("/:area", obtenerUsuariosPorArea);

module.exports = router;
