const errorHandler = (err, req, res, next) => {
    console.error("🔴 Error:", err);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  };
  
  module.exports = errorHandler;
  