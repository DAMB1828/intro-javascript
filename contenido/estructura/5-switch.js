/**
 *  ESTRUCTURA SWITCH
 * 
 */

//Costos de una fruta en la tienda

let comprar = "Mangos"

switch (key) {
    case "Manzana":
        console.log("Las naranjas cuestan Q16 la mano")
    break;
    case "Platano":
        console.log("Los platanos cuestan Q18 la docena")
    break;
    case "Manzanas":
        console.log("El precio de las manzanas por unidad es de Q5")
    //casos compartidos
    case "Mangos":
    case "papayas":
        console.log("Los mangos y papayas vale Q12 la libra")
        break;
    default:
        console.log(`No se encontraron con inventario para ${comprar}`)
        break;
        
}