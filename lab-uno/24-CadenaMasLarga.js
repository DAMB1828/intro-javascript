/**
 * 
 *  CADENA MAS LARGA
 * 
 */

function encontrarCadenaMasLarga(arrCadenas) {
  if (arrCadenas.length === 0) {
    return "";
  }

  let cadenaMasLarga = arrCadenas[0];
  for (let i = 1; i < arrCadenas.length; i++) {
    if (arrCadenas[i].length > cadenaMasLarga.length) {
      cadenaMasLarga = arrCadenas[i];
    }
  }

  return cadenaMasLarga;
}

const cadenas = ["gato", "elefante", "murciélago", "perro"];
const masLarga = encontrarCadenaMasLarga(cadenas);
console.log(masLarga);