// Ejercicio 12. Rotar la fila
// Practica: Indices calculados con formula y el operador %.

function rotarDerecha(lista, k) {
    let rotada = [];
    let n = lista.length;
    k = k % n;
    
    for (let i = 0; i < n; i++) {
        let nuevaPosicion = (i + k) % n;
        rotada[nuevaPosicion] = lista[i];
    }
    return rotada;
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

let n = Number(prompt("¿Cuántas personas?"));
let fila = [];

for (let i = 0; i < n; i++) {
    let persona = prompt("Persona " + (i + 1) + ":");
    fila.push(persona);
}

let k = Number(prompt("¿Cuántas posiciones rotar?"));
let rotada = rotarDerecha(fila, k);

console.log("Fila original: " + unirConComas(fila));
console.log("Fila rotada: " + unirConComas(rotada));