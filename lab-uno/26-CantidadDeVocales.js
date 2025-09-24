/**
 * 
 *  CANTIDAD DE VOCALES
 * 
 */

function contarVocales(cadena) {
  const vocales = "aeiouAEIOU"
  let contador = 0
  for (const caracter of cadena) {
    if (vocales.includes(caracter)) {
      contador++
    }
  }
  return contador
}

const texto = "Programación en JavaScript"
const cantidadVocales = contarVocales(texto)
console.log(`La cantidad de vocales en "${texto}" es: ${cantidadVocales}`)