const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

// Rutas para llamar a las funciones almacenadas
router.get("/promedio-diario/:asesor", dashboardController.getPromedioDiarioPorAsesor);
router.get("/promedio-mensual/:asesor", dashboardController.getPromedioMensualPorAsesor);
router.get("/promedios-asesores", dashboardController.getPromediosPorAsesor);
router.get("/promedios-area/:area", dashboardController.getPromediosPorArea);
router.get("/promedio-total", dashboardController.getPromedioTotal);

module.exports = router;
