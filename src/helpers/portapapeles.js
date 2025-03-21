export const copiarPotapapeles = async (texto) => {
  try {
    await navigator.clipboard.writeText(texto);
    console.log("Texto copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar al portapapeles:", err);
  }
};
