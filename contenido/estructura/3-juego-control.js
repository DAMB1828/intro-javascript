const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt(prompt("Adivina el numero secreto del 1 al 10"))

if (numeroJugador === numeroSecreto) {
    console.log("Felicidades ganaste, encontraste el numero secreto!")
} else if (numeroSecreto < numeroJugador){
    console.log("El numero es muy bajo!, intenta de nuevo")
} else {
    console.log("El numero es muy alto!, intentalo otravez")
}