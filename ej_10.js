// Ejercicio 10. Pares e impares
// Practica: Repartir los elementos de un array en dos arrays nuevos segun una condicion.

function esPar(numero) {
    return numero % 2 === 0;
}

function filtrarPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i])) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

function filtrarImpares(numeros) {
    let impares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (!esPar(numeros[i])) {
            impares.push(numeros[i]);
        }
    }
    return impares;
}

function unirConComas(lista) {
    if (lista.length === 0) {
        return "(ninguno)";
    }
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

for (let i = 0; i < 8; i++) {
    let numero = Number(prompt("Número " + (i + 1) + ":"));
    numeros.push(numero);
}

let pares = filtrarPares(numeros);
let impares = filtrarImpares(numeros);

console.log("Pares (" + pares.length + "): " + unirConComas(pares));
console.log("Impares (" + impares.length + "): " + unirConComas(impares));