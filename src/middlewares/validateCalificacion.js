const validateCalificacion = (req, res, next) => {
    const { nombre_cliente, area, asesor, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7 } = req.body;
  
    if (!nombre_cliente || !area || !asesor) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
  
    const preguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7];
  
    if (!preguntas.every((p) => p >= 1 && p <= 5)) {
      return res.status(400).json({ error: "Las preguntas deben estar entre 1 y 5" });
    }
  
    next();
  };
  
  module.exports = validateCalificacion;
  