/**
 * Formatea un número como moneda chilena (o local con punto de mil)
 * @param {number} amount - El monto numérico a formatear.
 * @returns {string} El monto formateado como cadena (ej: "25.000").
 */
export const formatPrice = (amount) => {
  if (typeof amount !== 'number') return amount; // Manejar casos donde no es un número

  // Usamos 'es-CL' (Español de Chile) para asegurar que se use el punto (.) 
  // como separador de miles y la coma (,) como separador de decimales.
  return amount.toLocaleString('es-CL', {
    // Estas opciones son opcionales si solo quieres el punto de mil:
    // style: 'currency', 
    // currency: 'CLP',
    minimumFractionDigits: 0 // Asegura que no haya decimales
  });
};