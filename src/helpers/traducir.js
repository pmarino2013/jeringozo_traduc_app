function decodificarJeringozo(texto) {
  return texto.replace(/([aeiouáéíóúüAEIOUÁÉÍÓÚÜ])p([aeiouAEIOU])/gu, "$1");
}

function codificarJeringozo(texto) {
  const mapaAcentos = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ü: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    Ü: "U",
  };

  return texto.replace(/([aeiouáéíóúüAEIOUÁÉÍÓÚÜ])/g, (match) => {
    const sinAcento = mapaAcentos[match] || match; // Si es acentuada, usa su versión sin acento
    return match + "p" + sinAcento;
  });
}

export { decodificarJeringozo, codificarJeringozo };
