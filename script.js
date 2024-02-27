let intentos = 6;
let palabra = "APPLE";

window.addEventListener("load", init);

function adivinar(letra) {
    if (palabra.includes(letra)) {
        console.log("¡Adivinaste!");
    } else {
        intentos--;
        console.log("¡Fallaste! Te quedan " + intentos + " intentos.");
    }
}