const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // Desactiva logs SQL en consola
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Necesario para conexiones en Heroku
    },
  },
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("🟢 Conectado a PostgreSQL con Sequelize");
  } catch (error) {
    console.error("🔴 Error al conectar a PostgreSQL:", error);
  }
};

testConnection();

module.exports = sequelize;
