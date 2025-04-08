const sequelize = require("../config/db");

// Asistente para ejecutar funciones sin parámetros
const ejecutarFuncionSimple = async (res, funcionSQL) => {
  try {
    const [result] = await sequelize.query(`SELECT * FROM ${funcionSQL}()`);
    res.json(result);
  } catch (error) {
    console.error(`🔴 Error al ejecutar ${funcionSQL}:`, error);
    res.status(500).json({ error: `Error al ejecutar ${funcionSQL}` });
  }
};

// Asistente para funciones con rango de fechas
const ejecutarFuncionConRango = async (res, funcionSQL, fecha_inicio, fecha_fin) => {
  if (!fecha_inicio || !fecha_fin) {
    return res.status(400).json({ error: "Se requieren fecha_inicio y fecha_fin" });
  }

  try {
    const [result] = await sequelize.query(
      `SELECT * FROM ${funcionSQL}(:fecha_inicio, :fecha_fin)`,
      {
        replacements: { fecha_inicio, fecha_fin },
      }
    );
    res.json(result);
  } catch (error) {
    console.error(`🔴 Error al ejecutar ${funcionSQL}:`, error);
    res.status(500).json({ error: `Error al ejecutar ${funcionSQL}` });
  }
};

/* -------------------------------------
   FUNCIONES POR ASESOR
-------------------------------------- */
const reportePromedioDiarioAsesor = (req, res) =>
  ejecutarFuncionSimple(res, "obtener_promedio_diario_por_asesor");

const reportePromedioMensualAsesor = (req, res) =>
  ejecutarFuncionSimple(res, "obtener_promedio_mensual_por_asesor");

const reportePromedioAsesorGeneral = (req, res) =>
  ejecutarFuncionSimple(res, "obtener_promedios_por_asesor");

const reportePromedioAsesorDiario = (req, res) =>
  ejecutarFuncionSimple(res, "obtener_promedios_diarios_por_asesor");

const reportePromedioAsesorMensual = (req, res) =>
  ejecutarFuncionSimple(res, "obtener_promedios_mensuales_por_asesor");

const reportePromedioAsesorRango = (req, res) => {
  const { fecha_inicio, fecha_fin } = req.query;
  ejecutarFuncionConRango(res, "obtener_promedios_por_asesor_rango", fecha_inicio, fecha_fin);
};

/* -------------------------------------
   FUNCIONES POR ÁREA
-------------------------------------- */
const reportePromedioAreaDiario = (req, res) =>
  ejecutarFuncionSimple(res, "obtener_promedios_diarios_por_areas");

const reportePromedioAreaMensual = (req, res) =>
  ejecutarFuncionSimple(res, "obtener_promedios_mensuales_por_areas");

const reportePromedioAreaRango = (req, res) => {
  const { fecha_inicio, fecha_fin } = req.query;
  ejecutarFuncionConRango(res, "obtener_promedios_por_areas_rango", fecha_inicio, fecha_fin);
};

/* -------------------------------------
   FUNCIONES DE TOTAL GENERAL
-------------------------------------- */
const reportePromedioTotal = (req, res) =>
  ejecutarFuncionSimple(res, "obtener_promedio_total");

const reportePromedioTotalDiario = (req, res) =>
  ejecutarFuncionSimple(res, "obtener_promedio_total_diario");

const reportePromedioTotalMensual = (req, res) =>
  ejecutarFuncionSimple(res, "obtener_promedio_total_mensual");

const reportePromedioTotalRango = (req, res) => {
  const { fecha_inicio, fecha_fin } = req.query;
  ejecutarFuncionConRango(res, "obtener_promedio_total_rango", fecha_inicio, fecha_fin);
};

module.exports = {
  // Asesor
  reportePromedioDiarioAsesor,
  reportePromedioMensualAsesor,
  reportePromedioAsesorGeneral,
  reportePromedioAsesorDiario,
  reportePromedioAsesorMensual,
  reportePromedioAsesorRango,

  // Área
  reportePromedioAreaDiario,
  reportePromedioAreaMensual,
  reportePromedioAreaRango,

  // Totales
  reportePromedioTotal,
  reportePromedioTotalDiario,
  reportePromedioTotalMensual,
  reportePromedioTotalRango,
};
