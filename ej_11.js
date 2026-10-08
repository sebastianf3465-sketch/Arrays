// Ejercicio 11. Sin repetidos
// Practica: Construir un array consultándolo mientras se construye, y reutilizar funciones.

function existeEnLista(lista, valor) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valor) {
            return true;
        }
    }
    return false;
}

function eliminarRepetidos(numeros) {
    let sinRepetidos = [];
    for (let i = 0; i < numeros.length; i++) {
        if (!existeEnLista(sinRepetidos, numeros[i])) {
            sinRepetidos.push(numeros[i]);
        }
    }
    return sinRepetidos;
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

let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt("Número " + (i + 1) + ":"));
    numeros.push(numero);
}

let sinRepetidos = eliminarRepetidos(numeros);
let repetidosEliminados = numeros.length - sinRepetidos.length;

console.log("Sin repetidos: " + unirConComas(sinRepetidos));
console.log("Se eliminaron " + repetidosEliminados + " repetidos");