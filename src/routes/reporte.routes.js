const express = require("express");
const router = express.Router();

const {
  // ASESOR
  reportePromedioDiarioAsesor,
  reportePromedioMensualAsesor,
  reportePromedioAsesorGeneral,
  reportePromedioAsesorDiario,
  reportePromedioAsesorMensual,
  reportePromedioAsesorRango,

  // ÁREA
  reportePromedioAreaDiario,
  reportePromedioAreaMensual,
  reportePromedioAreaRango,

  // TOTAL
  reportePromedioTotal,
  reportePromedioTotalDiario,
  reportePromedioTotalMensual,
  reportePromedioTotalRango,
} = require("../controllers/reporte.controller");

// ---------------------- ASESOR ----------------------
router.get("/asesor/por-dia", reportePromedioDiarioAsesor);
router.get("/asesor/por-mes", reportePromedioMensualAsesor);
router.get("/asesor/general", reportePromedioAsesorGeneral);
router.get("/asesor/diario", reportePromedioAsesorDiario);
router.get("/asesor/mensual", reportePromedioAsesorMensual);
router.get("/asesor/rango", reportePromedioAsesorRango); // ?fecha_inicio=YYYY-MM-DD&fecha_fin=YYYY-MM-DD

// ---------------------- ÁREA -----------------------
router.get("/area/diario", reportePromedioAreaDiario);
router.get("/area/mensual", reportePromedioAreaMensual);
router.get("/area/rango", reportePromedioAreaRango); // ?fecha_inicio=YYYY-MM-DD&fecha_fin=YYYY-MM-DD

// ---------------------- TOTAL ----------------------
router.get("/total/general", reportePromedioTotal);
router.get("/total/diario", reportePromedioTotalDiario);
router.get("/total/mensual", reportePromedioTotalMensual);
router.get("/total/rango", reportePromedioTotalRango); // ?fecha_inicio=YYYY-MM-DD&fecha_fin=YYYY-MM-DD

module.exports = router;
