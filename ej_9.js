// Ejercicio 9. Al revés sin reverse
// Practica: Recorrer de atrás hacia adelante y construir un array nuevo sin modificar el original.

function invertir(lista) {
    let invertido = [];
    for (let i = lista.length - 1; i >= 0; i--) {
        invertido.push(lista[i]);
    }
    return invertido;
}

function unirConComas(lista) {
    let resultado = "";
    for (let i = 0; i < lista.length; i++) {
        if (i < lista.length - 1) {
            resultado += lista[i] + ", ";
        } else {
            resultado += lista[i];
        }
    }
    return resultado;
}

let n = Number(prompt("¿Cuántas palabras?"));
let original = [];

for (let i = 0; i < n; i++) {
    let palabra = prompt("Palabra " + (i + 1) + ":");
    original.push(palabra);
}

let invertido = invertir(original);

console.log("Original: " + unirConComas(original));
console.log("Invertido: " + unirConComas(invertido));