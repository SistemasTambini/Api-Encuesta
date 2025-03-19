const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const encuestaRoutes = require("./src/routes/encuesta.routes");
const dashboardRoutes = require("./src/routes/dashbaord.routes")
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rutas principales
app.use("/api/encuestas", encuestaRoutes);
// Usar las rutas del dashboard
app.use("/api/dashboard", dashboardRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor
const PORT = process.env.PORT || 3051;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
