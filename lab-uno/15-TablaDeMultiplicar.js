/**
 * 
 *  TABLAS DE MULTIPLICAR 
 * 
 */

let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));

if (isNaN(numero)) {
  console.log("Por favor, ingresa un número válido")
} else {
  console.log(`Tabla de multiplicar del ${numero}:`)

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`)
  }
}