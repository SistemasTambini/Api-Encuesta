// utils/redondear.js

const redondearCamposNumericos = (result, decimales = 2) => {
    return result.map((fila) => {
      const nuevaFila = {};
      for (const key in fila) {
        const valor = fila[key];
        if (typeof valor === "number") {
          nuevaFila[key] = parseFloat(valor.toFixed(decimales));
        } else if (!isNaN(valor) && typeof valor === "string" && valor.trim() !== "") {
          // Si es un string que representa un número, también lo redondeamos
          nuevaFila[key] = parseFloat(parseFloat(valor).toFixed(decimales));
        } else {
          nuevaFila[key] = valor;
        }
      }
      return nuevaFila;
    });
  };
  
  module.exports = { redondearCamposNumericos };
  
  