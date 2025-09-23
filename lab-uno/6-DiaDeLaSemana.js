/**
 * Escribe una función que reciba un número del 1 al 7 y retorne el día de la semana correspondiente.
 */

function diaDeLaSemana(dias) {
  const dia = [ "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo",]
  if (dias >= 1 && dias <= 7) {
    return dia[dias - 1]
  } else {
    return "No existe es dia"
  }
}

console.log(diaDeLaSemana(8));