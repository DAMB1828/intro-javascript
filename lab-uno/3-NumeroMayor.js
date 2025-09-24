/**
 * 
 *  Crear una funcion que reciba dos numeros y retorne el numero mayor
 * 
 */

function elMayor(primerNumero, segundoNumero) {
  if (primerNumero > segundoNumero) {
    return primerNumero
  } else {
    return segundoNumero
  }
}

let primerNumero = 30
let segundoNumero = 28
let numeroMasGrande = elMayor(primerNumero, segundoNumero)
console.log(`El número más grande entre ${primerNumero} y ${segundoNumero} es: ${numeroMasGrande}`)