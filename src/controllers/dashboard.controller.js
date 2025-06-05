const sequelize = require("../config/db");


// Controlador para obtener el promedio diario de un asesor
exports.getPromedioDiarioPorAsesor = async (req, res) => {
    try {
        const { asesor } = req.params; // Obtener el nombre del asesor desde la URL
        const result = await sequelize.query(
            "SELECT * FROM obtener_promedio_diario_por_asesor(:asesor);",
            {
                replacements: { asesor },
                type: sequelize.QueryTypes.SELECT,
            }
        );
        res.json(result);
    } catch (error) {
        console.error("Error al obtener promedio diario por asesor:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Controlador para obtener el promedio mensual de un asesor
exports.getPromedioMensualPorAsesor = async (req, res) => {
    try {
        const { asesor } = req.params;
        const result = await sequelize.query(
            "SELECT * FROM obtener_promedio_mensual_por_asesor(:asesor);",
            {
                replacements: { asesor },
                type: sequelize.QueryTypes.SELECT,
            }
        );
        res.json(result);
    } catch (error) {
        console.error("Error al obtener promedio mensual por asesor:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Controlador para obtener promedios por asesor
exports.getPromediosPorAsesor = async (req, res) => {
    try {
        const result = await sequelize.query(
            "SELECT * FROM obtener_promedios_por_asesor();",
            { type: sequelize.QueryTypes.SELECT }
        );
        res.json(result);
    } catch (error) {
        console.error("Error al obtener promedios por asesor:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Controlador para obtener promedios por área
exports.getPromediosPorArea = async (req, res) => {
    try {
        const { area } = req.params;
        const result = await sequelize.query(
            "SELECT * FROM obtener_promedios_por_area(:area);",
            {
                replacements: { area },
                type: sequelize.QueryTypes.SELECT,
            }
        );
        res.json(result);
    } catch (error) {
        console.error("Error al obtener promedios por área:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Controlador para obtener el promedio total
exports.getPromedioTotal = async (req, res) => {
    try {
        const result = await sequelize.query(
            "SELECT * FROM obtener_promedio_total();",
            { type: sequelize.QueryTypes.SELECT }
        );
        res.json(result);
    } catch (error) {
        console.error("Error al obtener promedio total:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
//hola mundo

